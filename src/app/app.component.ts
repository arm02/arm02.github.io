import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProfileCollection } from './app.collection';
import Swal from 'sweetalert2';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRepository } from './app.repository';
import { DataCollectionEn, DataCollectionId } from './app.mock';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
import { concatMap, from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, NgOptimizedImage, FormsModule],
  providers: [AppRepository, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public profile: ProfileCollection = DataCollectionEn;
  isLoading = false;
  isLoadingNumber: number = this.profile.latestWork.length;
  currentSlide = 0;
  isLightMode = false;
  currentLang: 'en' | 'id' = 'en';

  // Terminal State
  isTerminalOpen = false;
  terminalInput = '';
  terminalHistory: { type: 'command' | 'response'; text: string }[] = [
    { type: 'response', text: 'Welcome to Adrian\'s Interactive Terminal (v1.0.0)' },
    { type: 'response', text: 'Type "help" to see available commands.' },
  ];
  private terminalCleanupFns: Array<() => void> = [];
  
  constructor() {}

  ngAfterViewInit() {
    // Ensure page starts at top after component loads
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  downloadNewResume() {
    window.open(this.profile.resumeLink, '_blank');
  }

  copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    Swal.fire({
      position: 'top',
      text: 'Phone Number Copied',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  nextSlide() {
    if (this.currentSlide < this.profile.latestWork.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'id' : 'en';
    this.profile = this.currentLang === 'en' ? DataCollectionEn : DataCollectionId;
    this.onContentChange();
  }

  toggleTerminal() {
    this.isTerminalOpen = !this.isTerminalOpen;
    if (this.isTerminalOpen) {
      setTimeout(() => {
        const input = document.getElementById('terminal-input');
        if (input) input.focus();
      }, 100);
      // Listen for global ESC to stop animations
      window.addEventListener('keydown', this.keyboardHandler);
    } else {
      window.removeEventListener('keydown', this.keyboardHandler);
      this.stopAllTerminalEffects();
    }
  }

  private keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.stopAllTerminalEffects();
    }
  }

  handleTerminalCommand(event: any) {
    if (event.key === 'Enter') {
      const command = this.terminalInput.trim().toLowerCase();
      this.terminalHistory.push({ type: 'command', text: command });
      this.processCommand(command);
      this.terminalInput = '';
    }
  }

  processCommand(cmd: string) {
    switch (cmd) {
      case 'matrix':
        this.terminalHistory.push({ type: 'response', text: 'Initializing Digital Rain...' });
        this.startMatrix();
        break;
      case 'help':
        this.terminalHistory.push({ 
          type: 'response', 
          text: `Available commands:
- whoami: About me
- fetch: My tech stack & info (neofetch style)
- socials: Contact & links
- ls: List projects
- snake: Play Modern Snake (HD)
- matrix: Digital Rain (High Quality)
- fire: Retro Fire Effect
- globe: Rotating ASCII Planet
- starfield: Hyperspace Travel
- cube: 3D Wireframe Cube
- pipes: Growing Logic Pipes
- weather: Local status
- history: Command history
- clear: Clear terminal
- exit: Close terminal`
        });
        break;
      case 'sudo':
        this.terminalHistory.push({ type: 'response', text: 'Nice try! But only I have root access here. 😉' });
        break;
      case 'history':
        const historyText = this.terminalHistory
          .filter(h => h.type === 'command')
          .map(h => h.text)
          .join('\n');
        this.terminalHistory.push({ type: 'response', text: historyText || 'No history yet.' });
        break;
      case 'weather':
        this.terminalHistory.push({ type: 'response', text: 'Fetching hyper-local data from the clouds...' });
        this.startWeather();
        break;
      case 'pipes':
        this.terminalHistory.push({ type: 'response', text: 'Initializing logic flow...' });
        this.startPipes();
        break;
      case 'fire':
        this.terminalHistory.push({ type: 'response', text: 'Stoking the flames...' });
        this.startFire();
        break;
      case 'cube':
        this.terminalHistory.push({ type: 'response', text: 'Projecting 3D geometry...' });
        this.startCube();
        break;
      case 'globe':
        this.terminalHistory.push({ type: 'response', text: 'Searching for signals...' });
        this.startGlobe();
        break;
      case 'starfield':
        this.terminalHistory.push({ type: 'response', text: 'Entering Hyperspace...' });
        this.startStarfield();
        break;
      case 'fetch':
        this.startFetch();
        break;
      case 'socials':
        this.terminalHistory.push({ 
          type: 'response', 
          text: `GitHub: ${this.profile.social.github}\nLinkedIn: ${this.profile.social.linkedin}` 
        });
        break;
      case 'whoami':
        this.terminalHistory.push({ 
          type: 'response', 
          text: `Adrian Milano - Senior Full Stack Engineer based in Jakarta. 8+ years experience in Go, Node.js, and Angular.` 
        });
        break;
      case 'skills':
        this.terminalHistory.push({ 
          type: 'response', 
          text: `Expertise: ${this.profile.coreSkills.slice(0, 3).join(', ')}... and many more.` 
        });
        break;
      case 'ls':
      case 'ls projects':
        this.terminalHistory.push({ 
          type: 'response', 
          text: this.profile.latestWork.map(p => p.title).join('\n') 
        });
        break;
      case 'clear':
        this.terminalHistory = [];
        break;
      case 'gui':
      case 'exit':
        this.isTerminalOpen = false;
        break;
      case 'coffee':
        this.terminalHistory.push({ type: 'response', text: '☕ Here is your virtual coffee! Happy coding!' });
        break;
      case 'snake':
        this.terminalHistory.push({ type: 'response', text: 'Initializing Snake Game...' });
        this.terminalHistory.push({ type: 'response', text: 'Use Arrow Keys to play. (Game lasts 30s)' });
        this.startSnake();
        break;
      default:
        this.terminalHistory.push({ type: 'response', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
    }
    
    // Auto scroll to bottom
    setTimeout(() => {
      const container = document.querySelector('.terminal-body');
      if (container) container.scrollTop = container.scrollHeight;
    }, 50);
  }

  private stopAllTerminalEffects() {
    this.terminalCleanupFns.forEach(fn => fn());
    this.terminalCleanupFns = [];
  }

  private startMatrix() {
    const existing = document.getElementById('matrix-canvas');
    if (existing) existing.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    Object.assign(canvas.style, {
      position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
      zIndex: '-1', opacity: '0.6'
    });
    
    const window = document.querySelector('.terminal-window');
    if (window) {
      window.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resize = () => {
        canvas.width = window.clientWidth;
        canvas.height = window.clientHeight;
      };
      resize();
      window.addEventListener('resize', resize);

      const characters = "01ADRIANMILANOSENIORFULLSTACKENGINEERGOANGULARNODEJSJAVA";
      const fontSize = 16;
      const columns = canvas.width / fontSize;
      const drops: number[] = Array(Math.ceil(columns)).fill(0);

      const draw = () => {
        ctx.fillStyle = "rgba(13, 17, 23, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < drops.length; i++) {
          const char = characters.charAt(Math.floor(Math.random() * characters.length));
          
          // Gradient like effect for lead character
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.shadowBlur = 0;
          ctx.fillStyle = "rgba(0, 255, 70, 0.35)"; // Regular characters
          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(char, x, y);

          // Lead character (glow)
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#fff";
          ctx.fillStyle = "#fff";
          ctx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 50);
      const cleanup = () => {
        clearInterval(interval);
        canvas.remove();
        window.removeEventListener('resize', resize);
      };
      this.terminalCleanupFns.push(cleanup);
      setTimeout(cleanup, 30000);
    }
  }

  private startFetch() {
    const info = `
   \x1b[32m           .---.
   \x1b[32m          /     \\
   \x1b[32m          | () () |
   \x1b[32m           \\  ^  /  \x1b[34mADRIAN MILANO
   \x1b[32m            |||||   \x1b[0m----------------
   \x1b[32m            |||||   \x1b[33mOS:\x1b[0m Custom Portfolio OS v1.0
   \x1b[32m                    \x1b[33mRole:\x1b[0m Senior Full Stack Engineer
   \x1b[32m                    \x1b[33mCore:\x1b[0m Go, Node.js, Spring Boot
   \x1b[32m                    \x1b[33mWeb:\x1b[0m Angular, React, Next.js
   \x1b[32m                    \x1b[33mLoc:\x1b[0m Jakarta, Indonesia
    `;
    this.terminalHistory.push({ type: 'response', text: info });
  }

  private startSnake() {
    const existing = document.getElementById('snake-game-container');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.id = 'snake-game-container';
    Object.assign(container.style, {
      position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
      background: 'rgba(13, 17, 23, 0.98)', zIndex: '20', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    });

    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    canvas.style.border = '2px solid #30363d';
    canvas.style.borderRadius = '12px';
    canvas.style.boxShadow = '0 0 30px rgba(39, 201, 63, 0.3)';
    
    const scoreEl = document.createElement('div');
    scoreEl.style.color = '#fff';
    scoreEl.style.fontSize = '24px';
    scoreEl.style.fontWeight = 'bold';
    scoreEl.style.fontFamily = 'monospace';
    scoreEl.style.marginBottom = '15px';
    scoreEl.innerText = 'SCORE: 0';

    container.appendChild(scoreEl);
    container.appendChild(canvas);
    
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalWindow.appendChild(container);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let score = 0;
      let dx = 20;
      let dy = 0;
      let snake = [{x: 160, y: 160}, {x: 140, y: 160}, {x: 120, y: 160}];
      let food = {x: 300, y: 300};
      let changingDirection = false;

      const drawSnakePart = (part: any, index: number) => {
        const isHead = index === 0;
        
        // Gradient for snake
        const grad = ctx.createLinearGradient(part.x, part.y, part.x + 20, part.y + 20);
        grad.addColorStop(0, isHead ? '#27c93f' : '#1a8a2c');
        grad.addColorStop(1, isHead ? '#22e03e' : '#27c93f');
        
        ctx.fillStyle = grad;
        ctx.shadowBlur = isHead ? 10 : 0;
        ctx.shadowColor = '#27c93f';
        
        // Rounded rectangles for snake
        const radius = 6;
        ctx.beginPath();
        ctx.roundRect(part.x + 1, part.y + 1, 18, 18, radius);
        ctx.fill();
        ctx.shadowBlur = 0;
      };

      const drawFood = () => {
        ctx.fillStyle = '#ff5f56';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff5f56';
        ctx.beginPath();
        ctx.arc(food.x + 10, food.y + 10, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      };

      const advanceSnake = () => {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        if (snake[0].x === food.x && snake[0].y === food.y) {
          score += 10;
          scoreEl.innerText = `SCORE: ${score}`;
          createFood();
        } else {
          snake.pop();
        }
      };

      const createFood = () => {
        food.x = Math.floor(Math.random() * (canvas.width / 20)) * 20;
        food.y = Math.floor(Math.random() * (canvas.height / 20)) * 20;
        // Verify not on snake
        snake.forEach(part => {
          if (part.x === food.x && part.y === food.y) createFood();
        });
      };

      const changeDirection = (event: any) => {
        if (changingDirection) return;
        changingDirection = true;
        const key = event.keyCode;
        const up = dy === -20;
        const down = dy === 20;
        const right = dx === 20;
        const left = dx === -20;

        if (key === 37 && !right) { dx = -20; dy = 0; }
        if (key === 38 && !down) { dx = 0; dy = -20; }
        if (key === 39 && !left) { dx = 20; dy = 0; }
        if (key === 40 && !up) { dx = 0; dy = 20; }
        if ([37,38,39,40].includes(key)) event.preventDefault();
      };

      document.addEventListener('keydown', changeDirection);

      const gameLoop = () => {
        if (didGameEnd()) {
          this.terminalHistory.push({ type: 'response', text: `\x1b[31mGAME OVER! \x1b[0mFinal Score: ${score}` });
          cleanup();
          return;
        }

        setTimeout(() => {
          changingDirection = false;
          ctx.fillStyle = '#0d1117';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          drawFood();
          advanceSnake();
          snake.forEach((p, i) => drawSnakePart(p, i));
          gameLoop();
        }, 100);
      };

      const didGameEnd = () => {
        for (let i = 4; i < snake.length; i++) {
          if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
        }
        return snake[0].x < 0 || snake[0].x >= canvas.width || 
               snake[0].y < 0 || snake[0].y >= canvas.height;
      };

      const cleanup = () => {
        document.removeEventListener('keydown', changeDirection);
        container.remove();
      };

      gameLoop();
      // Add a close button for players
      const closeBtn = document.createElement('button');
      closeBtn.innerText = 'X';
      Object.assign(closeBtn.style, {
        position: 'absolute', top: '10px', right: '10px', background: 'transparent',
        border: 'none', color: '#8b949e', cursor: 'pointer', fontSize: '20px'
      });
      closeBtn.onclick = cleanup;
      container.appendChild(closeBtn);
      this.terminalCleanupFns.push(cleanup);
    }
  }

  private startFire() {
    const existing = document.getElementById('fire-canvas');
    if (existing) existing.remove();
    const canvas = document.createElement('canvas');
    canvas.id = 'fire-canvas';
    Object.assign(canvas.style, { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0', opacity: '0.6', pointerEvents: 'none' });
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalWindow.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = terminalWindow.clientWidth / 2;
      canvas.height = terminalWindow.clientHeight / 2;
      const w = canvas.width, h = canvas.height;
      const firePixels = new Uint8Array(w * h).fill(0);
      const colors = ["#070707","#1f0707","#2f0f07","#470f07","#571707","#671f07","#771f07","#8f2707","#9f2f07","#af3f07","#bf4707","#c74707","#df4f07","#df5707","#df5708","#df5f07","#d75f07","#d7670f","#cf6f0f","#cf770f","#cf7f0f","#cf8717","#c78717","#c78f17","#c7971f","#bf9f1f","#bfaf27","#bfa727","#bfaf2f","#b7af2f","#b7b72f","#b7b737","#cfcf6f","#dfdf9f","#efefc7","#ffffff"];
      
      const draw = () => {
        ctx.fillStyle = "#0d1117";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for(let x=0; x<w; x++) firePixels[(h-1)*w + x] = 35;
        for(let x=0; x<w; x++) {
          for(let y=1; y<h; y++) {
            const src = y*w + x;
            const pixel = firePixels[src];
            if (pixel === 0) firePixels[src-w] = 0;
            else {
              const rand = Math.floor(Math.random() * 3);
              const dst = src - rand + 1 - w;
              firePixels[dst] = pixel - (rand & 1);
            }
          }
        }
        const imgData = ctx.createImageData(w, h);
        for(let i=0; i<firePixels.length; i++) {
          const color = colors[firePixels[i]];
          const r = parseInt(color.slice(1,3), 16), g = parseInt(color.slice(3,5), 16), b = parseInt(color.slice(5,7), 16);
          imgData.data[i*4]=r; imgData.data[i*4+1]=g; imgData.data[i*4+2]=b; imgData.data[i*4+3]=255;
        }
        ctx.putImageData(imgData, 0, 0);
      };
      const interval = setInterval(draw, 30);
      const cleanup = () => { clearInterval(interval); canvas.remove(); };
      this.terminalCleanupFns.push(cleanup);
      setTimeout(cleanup, 15000);
    }
  }

  private startGlobe() {
    const existing = document.getElementById('globe-container');
    if (existing) existing.remove();
    const container = document.createElement('div');
    container.id = 'globe-container';
    Object.assign(container.style, { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(13, 17, 23, 0.95)', color: '#58a6ff', fontFamily: 'monospace', fontSize: '12px' });
    const pre = document.createElement('pre');
    container.appendChild(pre);
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalWindow.appendChild(container);
      let angle = 0;
      const drawGlobe = () => {
        const width = 40, height = 20;
        let globe = "";
        for(let y=0; y<height; y++) {
          for(let x=0; x<width; x++) {
            const nx = (x/width)*2-1, ny = (y/height)*2-1;
            const dist = nx*nx + ny*ny;
            if (dist < 0.6) {
              const charIndex = Math.floor(((Math.sin(nx*5 + angle) + 1) / 2) * 5);
              globe += [" ", ".", "*", "o", "O", "@"][charIndex];
            } else globe += " ";
          }
          globe += "\n";
        }
        pre.innerText = globe;
        angle += 0.1;
      };
      const interval = setInterval(drawGlobe, 100);
      const cleanup = () => { clearInterval(interval); if(container.parentNode) container.remove(); };
      container.onclick = cleanup;
      this.terminalCleanupFns.push(cleanup);
      setTimeout(cleanup, 20000);
    }
  }

  private startStarfield() {
    const existing = document.getElementById('starfield-canvas');
    if (existing) existing.remove();
    const canvas = document.createElement('canvas');
    canvas.id = 'starfield-canvas';
    Object.assign(canvas.style, { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0', pointerEvents: 'none', opacity: '0.7' });
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalWindow.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = terminalWindow.clientWidth; canvas.height = terminalWindow.clientHeight;
      const stars = Array(200).fill(0).map(() => ({ x: Math.random()*canvas.width - canvas.width/2, y: Math.random()*canvas.height - canvas.height/2, z: Math.random()*canvas.width }));
      const draw = () => {
        ctx.fillStyle = "#0d1117"; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.translate(canvas.width/2, canvas.height/2);
        stars.forEach(s => {
          s.z -= 5;
          if (s.z <= 0) s.z = canvas.width;
          const sx = (s.x / s.z) * (canvas.width / 2), sy = (s.y / s.z) * (canvas.width / 2);
          const size = (1 - s.z/canvas.width) * 3;
          ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(sx, sy, size, 0, Math.PI*2); ctx.fill();
        });
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      };
      const interval = setInterval(draw, 20);
      const cleanup = () => { clearInterval(interval); canvas.remove(); };
      this.terminalCleanupFns.push(cleanup);
      setTimeout(cleanup, 15000);
    }
  }

  private startCube() {
    const existing = document.getElementById('cube-canvas');
    if (existing) existing.remove();
    const canvas = document.createElement('canvas');
    canvas.id = 'cube-canvas';
    Object.assign(canvas.style, { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0', pointerEvents: 'none' });
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalWindow.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const resize = () => {
        canvas.width = terminalWindow.clientWidth;
        canvas.height = terminalWindow.clientHeight;
      };
      resize();
      window.addEventListener('resize', resize);
      
      let angle = 0;
      const points = [
        [-60,-60,-60], [60,-60,-60], [60,60,-60], [-60,60,-60],
        [-60,-60,60], [60,-60,60], [60,60,60], [-60,60,60]
      ];
      const edges = [
        [0,1], [1,2], [2,3], [3,0], [4,5], [5,6], [6,7], [7,4], [0,4], [1,5], [2,6], [3,7]
      ];

      const draw = () => {
        ctx.fillStyle = "rgba(13, 17, 23, 0.8)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#58a6ff"; 
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#58a6ff";
        
        ctx.translate(canvas.width/2, canvas.height/2);
        
        const rotated = points.map(p => {
          let x = p[0], y = p[1], z = p[2];
          // Rotate X
          let ny = y * Math.cos(angle) - z * Math.sin(angle);
          let nz = y * Math.sin(angle) + z * Math.cos(angle);
          y = ny; z = nz;
          // Rotate Y
          let nx = x * Math.cos(angle) + z * Math.sin(angle);
          nz = -x * Math.sin(angle) + z * Math.cos(angle);
          x = nx; z = nz;
          return [x, y, z];
        });

        edges.forEach(e => {
          const p1 = rotated[e[0]], p2 = rotated[e[1]];
          const z1 = 300 / (300 - p1[2]), z2 = 300 / (300 - p2[2]);
          ctx.beginPath();
          ctx.moveTo(p1[0] * z1, p1[1] * z1);
          ctx.lineTo(p2[0] * z2, p2[1] * z2);
          ctx.stroke();
        });

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        angle += 0.02;
      };

      const interval = setInterval(draw, 30);
      const cleanup = () => { 
        clearInterval(interval); 
        canvas.remove(); 
        window.removeEventListener('resize', resize);
      };
      this.terminalCleanupFns.push(cleanup);
      setTimeout(cleanup, 15000);
    }
  }

  private startPipes() {
    const existing = document.getElementById('pipes-canvas');
    if (existing) existing.remove();
    const canvas = document.createElement('canvas');
    canvas.id = 'pipes-canvas';
    Object.assign(canvas.style, { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0', pointerEvents: 'none' });
    const win = document.querySelector('.terminal-window');
    if (win) {
      win.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = win.clientWidth; canvas.height = win.clientHeight;
      
      const size = 15;
      const cols = canvas.width / size, rows = canvas.height / size;
      const pipes = Array(5).fill(0).map(() => ({ x: Math.floor(Math.random()*cols), y: Math.floor(Math.random()*rows), dir: Math.floor(Math.random()*4), color: `hsl(${Math.random()*360}, 70%, 50%)` }));

      const draw = () => {
        pipes.forEach(p => {
          ctx.strokeStyle = p.color; ctx.lineWidth = 4; ctx.beginPath();
          ctx.moveTo(p.x * size + size/2, p.y * size + size/2);
          if (Math.random() > 0.8) p.dir = Math.floor(Math.random()*4);
          if (p.dir === 0) p.x++; else if (p.dir === 1) p.x--; else if (p.dir === 2) p.y++; else p.y--;
          if (p.x < 0) p.x = cols-1; if (p.x >= cols) p.x = 0; if (p.y < 0) p.y = rows-1; if (p.y >= rows) p.y = 0;
          ctx.lineTo(p.x * size + size/2, p.y * size + size/2); ctx.stroke();
        });
      };
      const interval = setInterval(draw, 50);
      const cleanup = () => { clearInterval(interval); canvas.remove(); };
      this.terminalCleanupFns.push(cleanup);
      setTimeout(cleanup, 20000);
    }
  }

  private startWeather() {
    const weather = `
    \x1b[33m    \\   /      \x1b[0mLocation: Jakarta
    \x1b[33m     .-.       \x1b[0mCondition: Dynamic Coding
    \x1b[33m  ― (   ) ―    \x1b[0mTemp: 32°C (Feels like 100% Logic)
    \x1b[33m     '-'       \x1b[0mWind: 10ms Node.js latency
    \x1b[33m    /   \\      \x1b[36mForecast: Clear with a chance of breakthroughs\x1b[0m
    `;
    this.terminalHistory.push({ type: 'response', text: weather });
  }

  private onContentChange() {
    // Reset or update any states that depend on profile content
    this.currentSlide = 0;
    this.isLoadingNumber = this.profile.latestWork.length;
  }
}

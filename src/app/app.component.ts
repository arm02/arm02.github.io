import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCollection } from './app.collection';
import Swal from 'sweetalert2';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRepository } from './app.repository';
import { DataCollection } from './app.mock';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
import { concatMap, from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, NgOptimizedImage],
  providers: [AppRepository, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public profile: ProfileCollection = DataCollection;
  isLoading = false;
  isLoadingNumber: number = this.profile.latestWork.length;
  currentSlide = 0;
  
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
}

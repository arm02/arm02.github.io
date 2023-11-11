import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCollection, ResponseCollection } from './app.collection';
import Swal from 'sweetalert2';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRepository } from './app.repository';
import { DataCollection } from './app.mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, NgOptimizedImage],
  providers: [AppRepository, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public profile: ProfileCollection = DataCollection;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getProfileData().subscribe({
      next: (res: ResponseCollection) => {
        this.profile = res.profile;
      },
      error: (err) => console.error(err),
      complete: () => {},
    });
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
}

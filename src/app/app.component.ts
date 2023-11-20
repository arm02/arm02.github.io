import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCollection, ResponseCollection } from './app.collection';
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
export class AppComponent {
  public profile: ProfileCollection = DataCollection;
  isLoading = false;
  isLoadingNumber: number = this.profile.latestWork.length;
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

  public downloadResume() {
    this.isLoadingNumber += 6;
    this.isLoading = true;
    const bannerData: any = document.getElementById('bannerData');
    const aboutData: any = document.getElementById('aboutData');
    const skillsData: any = document.getElementById('skillsData');
    const educationData: any = document.getElementById('educationData');
    const experienceData: any = document.getElementById('experienceData');
    const awardData: any = document.getElementById('awardData');
    const latestWorkTitle: any = document.getElementById('latestWorkTitle');

    html2canvas(bannerData).then((bannerRes) => {
      this.isLoadingNumber -= 1;
      html2canvas(aboutData).then((aboutRes) => {
        this.isLoadingNumber -= 1;
        html2canvas(skillsData).then((skillsRes) => {
          this.isLoadingNumber -= 1;
          html2canvas(educationData).then((educationRes) => {
            this.isLoadingNumber -= 1;
            html2canvas(experienceData).then((experienceRes) => {
              this.isLoadingNumber -= 1;
              html2canvas(awardData).then((awardRes) => {
                html2canvas(latestWorkTitle).then((latestWorkTitleRes) => {
                  this.isLoadingNumber -= 1;
                  let latestWorkData: any = [];
                  let i = 0;
                  from(this.profile.latestWork)
                    .pipe(
                      concatMap((res, index) => {
                        let docElem = document.getElementById(
                          'latestWorkData' + index
                        );
                        return from(
                          html2canvas(docElem as any).then(function (canvas) {
                            i++;
                            latestWorkData.push({
                              image: canvas.toDataURL('image/png'),
                              width: 500,
                              marginBottom: 10,
                            });
                            return canvas.toDataURL('image/png');
                          })
                        );
                      })
                    )
                    .subscribe(() => {
                      this.isLoadingNumber -= 1;
                      if (i === this.profile.latestWork.length) {
                        this.isLoading = false;
                        this.generateAsPDF(
                          bannerRes.toDataURL('image/png'),
                          aboutRes.toDataURL('image/png'),
                          skillsRes.toDataURL('image/png'),
                          educationRes.toDataURL('image/png'),
                          experienceRes.toDataURL('image/png'),
                          awardRes.toDataURL('image/png'),
                          latestWorkData,
                          latestWorkTitleRes.toDataURL('image/png')
                        );
                      }
                    });
                });
              });
            });
          });
        });
      });
    });
  }

  generateAsPDF(
    bannerData: any,
    aboutData: any,
    skillsData: any,
    educationData: any,
    experienceData: any,
    awardData: any,
    latestWorkData: any,
    latestWorkTitle: any
  ) {
    const docDefinition: any = {
      content: [
        {
          image: bannerData,
          width: 500,
        },
        {
          image: aboutData,
          width: 500,
          marginBottom: 20,
        },
        {
          image: skillsData,
          width: 500,
        },
        {
          image: educationData,
          width: 500,
        },
        {
          image: experienceData,
          width: 500,
        },
        {
          image: awardData,
          width: 500,
        },
        {
          image: latestWorkTitle,
          width: 50,
          marginTop: 500,
          marginBottom: 10,
        },
        ...latestWorkData,
      ],
      pageSize: 'A4',
    };
    pdfMake.createPdf(docDefinition).download('CV Adrian Milano.pdf');
    this.isLoading = false;
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

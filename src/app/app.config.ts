import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) ]
};

export const BASE_URL: string = 'https://jsonblob.com/api/jsonBlob/';
export const JSON_ID: string = '1172751261891420160';

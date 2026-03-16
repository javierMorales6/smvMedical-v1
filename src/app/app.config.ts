import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes'; // aqui estan las rutas

export const appConfig: ApplicationConfig = {
  providers: [

    //provideRouter(routes), Se esta repitiendo por eso lo vamos a comentar

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top'
      })
    )
  ],
};

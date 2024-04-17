import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes,
      withViewTransitions(
        {
          skipInitialTransition:true,
          onViewTransitionCreated:(transition)=>{
          }
        }
      )

    ),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(
      HttpClientModule
    )
  ]
};


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('src/app/pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('src/app/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('src/app/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'notices',
    loadComponent: () =>
      import('src/app/pages/notices/notices.component').then(
        (c) => c.NoticesComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule), provideRouter(routes)],
}).catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { CargaInformacionComponent } from './app/carga-informacion/carga-informacion.component';

const routes: Routes = [
  { path: 'carga-informacion', component: CargaInformacionComponent },
  { path: '', redirectTo: '/carga-informacion', pathMatch: 'full' },
];

function routerProviders() {
  return RouterModule.forRoot(routes).providers;
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'routerProviders', useFactory: routerProviders }
  ]
}).catch(err => console.error(err));



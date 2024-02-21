import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>`,
  imports: [
    RouterOutlet
  ],
  // Usando router-outlet para el enrutamiento
  styles: []
})
export class AppComponent {}



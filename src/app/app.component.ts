import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pwa';

  isPWAInstalled = false;

  constructor(public authService: AuthService) {
    /*window.addEventListener('appinstalled', () => {
      this.isPWAInstalled = true;
      console.log('¡PWA instalada!');
    });*/
  }
}
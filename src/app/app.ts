import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Gallery } from './components/gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Gallery,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('imageFilter');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('My_Demo_App');
  count = signal(0)
  clickIncrement() {
    this.count.update(value => value + 1);
  }
}

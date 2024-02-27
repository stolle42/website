import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HellocomponentComponent } from './hellocomponent/hellocomponent.component';

@Component({
  selector: 'app-root', //custom html tag
  standalone: true,
  imports: [RouterOutlet, HellocomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'page title';
}

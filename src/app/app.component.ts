import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './view/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Porftolio';
}

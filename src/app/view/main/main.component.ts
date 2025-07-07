import { Component, HostListener } from '@angular/core';
import { JumbotronComponent } from '../../component/jumbotron/jumbotron.component';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-main',
  imports: [JumbotronComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  mostrarHeader = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarHeader = window.scrollY < 100;
  }
}

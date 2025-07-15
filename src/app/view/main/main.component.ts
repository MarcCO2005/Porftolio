import { Component, HostListener } from '@angular/core';
import { JumbotronComponent } from '../../component/jumbotron/jumbotron.component';
import { HeaderComponent } from '../../component/header/header.component';
import { ProjectsComponent } from '../../component/projects/projects.component';
import { AboutComponent } from '../../component/about/about.component';
import { ContactComponent } from '../../component/contact/contact.component';
import { FooterComponent } from '../../component/footer/footer.component';


@Component({
  selector: 'app-main',
  imports: [JumbotronComponent, HeaderComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent],
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

import { Component, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { JumbotronComponent } from '../../component/jumbotron/jumbotron.component';
import { HeaderComponent } from '../../component/header/header.component';
import { ProjectsComponent } from '../../component/projects/projects.component';
import { AboutComponent } from '../../component/about/about.component';
import { ContactComponent } from '../../component/contact/contact.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ExperienceComponent } from '../../component/experience/experience.component';
import { StudiesComponent } from '../../component/studies/studies.component';


@Component({
  selector: 'app-main',
  imports: [JumbotronComponent, HeaderComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent, ExperienceComponent, StudiesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  mostrarHeader = true;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Marc Cuenca | Desarrollador Full-Stack | Portfolio');
    this.metaService.updateTag({ name: 'description', content: 'Portfolio profesional de Marc Cuenca, desarrollador Full-Stack apasionado por la tecnología y el diseño de software de calidad.' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarHeader = window.scrollY < 100;
  }
}

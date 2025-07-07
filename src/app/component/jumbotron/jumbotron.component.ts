import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jumbotron',
  imports: [CommonModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent implements OnInit {
  // Configuración del contenido
  title = 'Desarrollador Full-Stack';
  subtitle = 'Creando experiencias digitales excepcionales';
  description = [
    'Especializado en desarrollo web moderno con Angular, React y Node.js',
    'Apasionado por crear soluciones elegantes y funcionales',
    'Transformando ideas en código limpio y eficiente'
  ];

  // Variables para la animación
  titleChars: string[] = [];
  subtitleChars: string[] = [];
  descriptionLines: string[] = [];
  animationStarted = false;

  ngOnInit() {
    this.initializeAnimations();
  }

  private initializeAnimations() {
    this.titleChars = this.title.split('');
    this.subtitleChars = this.subtitle.split('');
    this.descriptionLines = this.description;
    
    // Iniciar animación después de un breve delay
    setTimeout(() => {
      this.animationStarted = true;
    }, 500);
  }

  scrollToSection(selector: string) {
    if (typeof document !== 'undefined') {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}

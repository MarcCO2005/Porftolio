import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'Portfolio Personal',
      description: 'Mi portafolio web hecho con Angular, animaciones y diseño responsive.',
      image: 'project1.jpg',
      demo: '#',
      code: '#'
    },
    {
      title: 'Tienda Online',
      description: 'E-commerce moderno con carrito, pagos y panel de administración.',
      image: 'project2.jpg',
      demo: '#',
      code: 'https://github.com/MarcCO2005/Taskly_TFG'
    },
    {
      title: 'Taskly',
      description: 'Chatbot de generacion de tareas con IA.',
      image: 'project3.jpg',
      demo: '#',
      code: '#'
    }
  ];

  visibleCards: boolean[] = [];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Animación de la sección completa
    const section = this.el.nativeElement.querySelector('.projects-section');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });
    sectionObserver.observe(section);

    // Animación de las tarjetas
    const cards = this.el.nativeElement.querySelectorAll('.project-card');
    this.visibleCards = Array(cards.length).fill(false);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const idx = Array.from(cards).indexOf(entry.target as HTMLElement);
        if (entry.isIntersecting && idx !== -1) {
          this.visibleCards[idx] = true;
          entry.target.classList.add('visible');
        } else if (idx !== -1) {
          this.visibleCards[idx] = false;
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });
    cards.forEach((card: HTMLElement) => observer.observe(card));
  }

  getCardPositionClass(index: number): string {
    if (index % 3 === 0) return 'left';
    if (index % 3 === 1) return 'center';
    return 'right';
  }
}

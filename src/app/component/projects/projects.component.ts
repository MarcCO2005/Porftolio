import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private el: ElementRef, public ts: TranslationService) { }

  get projects() {
    return [
      {
        title: this.ts.t('projects.p1.title'),
        description: this.ts.t('projects.p1.desc'),
        image: 'project1.jpg',
        website: 'https://porftolio-delta.vercel.app',
        video: '',
        tags: ['Angular', 'GSAP', 'TypeScript', 'i18n']
      },
      {
        title: this.ts.t('projects.p2.title'),
        description: this.ts.t('projects.p2.desc'),
        image: 'project2.jpg',
        isPrivate: true,
        tags: ['LARAVEL', 'React', 'API REST', 'PAYMENT GATEWAY']
      },
      {
        title: this.ts.t('projects.p3.title'),
        description: this.ts.t('projects.p3.desc'),
        image: 'project3.jpg',
        video: '/VideoTaskly.mp4',
        code: 'https://github.com/MarcCO2005/Taskly_TFG.git',
        tags: ['Firebase', 'Angular', 'Symfony', 'SMS Service']
      }
    ];
  }

  visibleCards: boolean[] = [];

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

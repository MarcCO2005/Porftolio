import { Component, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  name = 'Marc Cuenca';
  isScrolled = false;
  menuOpen = false;
  activeSection: string = '';

  menuItems = [
    { id: 1, label: 'Inicio', href: '#inicio' },
    { id: 2, label: 'Sobre mí', href: '#sobre-mi' },
    { id: 3, label: 'Proyectos', href: '#proyectos' },
    { id: 4, label: 'Contacto', href: '#contacto' }
  ];

  ngOnInit() {
    this.handleScroll();
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const sectionIds = this.menuItems.map(item => item.href.replace('#', ''));
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      const observer = new window.IntersectionObserver((entries) => {
        let maxRatio = 0;
        let currentSection = '';
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentSection = '#' + entry.target.id;
          }
        });
        if (currentSection) {
          this.activeSection = currentSection;
        }
      }, { threshold: [0.3, 0.5, 0.7] });
      sections.forEach(section => observer.observe(section));
    }
    // Animación de la imagen de cabecera según scroll
    if (typeof window !== 'undefined') {
      const headerImage = document.querySelector('.header-image') as HTMLElement;
      if (headerImage) {
        window.addEventListener('scroll', () => {
          const rect = headerImage.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          // Progreso: 0 (imagen completamente visible) a 1 (imagen fuera de vista)
          let progress = 1 - Math.max(0, Math.min(1, rect.bottom / windowHeight));
          progress = Math.max(0, Math.min(progress, 1));
          headerImage.style.opacity = (1 - 0.2 * progress).toString(); // de 1 a 0.8
          headerImage.style.transform = `scale(${1 + 2 * progress})`;
        });
      }
    }
  }

  handleScroll() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

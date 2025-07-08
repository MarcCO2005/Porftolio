import { Component, AfterViewInit } from '@angular/core';
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

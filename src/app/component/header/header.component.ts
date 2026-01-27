import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {

  name = 'Marc Cuenca';
  isScrolled = false;
  menuOpen = false;
  activeSection: string = '';

  menuItems = [
    { id: 1, label: 'Inicio', href: '#inicio' },
    { id: 2, label: 'Sobre mí', href: '#sobre-mi' },
    { id: 3, label: 'Experiencia', href: '#experiencia' },
    { id: 4, label: 'Educación', href: '#educacion' },
    { id: 5, label: 'Proyectos', href: '#proyectos' },
    { id: 6, label: 'Contacto', href: '#contacto' }
  ];

  private scrollListener: any;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.scrollListener = () => {
        this.isScrolled = window.scrollY > 50;
      };
      window.addEventListener('scroll', this.scrollListener);
      this.checkInitialHash();
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined' && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const sectionIds = this.menuItems.map(item => item.href.replace('#', ''));
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.activeSection = '#' + entry.target.id;
          }
        });
      }, { threshold: [0.5] });

      sections.forEach(section => observer.observe(section));
    }
  }

  checkInitialHash() {
    if (typeof window !== 'undefined' && window.location.hash) {
      this.activeSection = window.location.hash;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }

  onNavItemClick(href: string) {
    this.activeSection = href;
    this.closeMenu();
  }
}

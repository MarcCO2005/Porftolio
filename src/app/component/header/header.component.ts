import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  name = 'Tu Nombre';
  isScrolled = false;
  menuOpen = false;

  menuItems = [
    { id: 1, label: 'Inicio', href: '#inicio' },
    { id: 2, label: 'Proyectos', href: '#proyectos' },
    { id: 3, label: 'Sobre mí', href: '#sobre-mi' },
    { id: 4, label: 'Contacto', href: '#contacto' }
  ];

  ngOnInit() {
    this.handleScroll();
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

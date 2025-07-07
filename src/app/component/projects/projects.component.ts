import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Personal',
      description: 'Mi portafolio web hecho con Angular, animaciones y diseño responsive.',
      image: 'assets/bg-portfolio.jpg',
      demo: '#',
      code: '#'
    },
    {
      title: 'Tienda Online',
      description: 'E-commerce moderno con carrito, pagos y panel de administración.',
      image: '',
      demo: '#',
      code: '#'
    },
    {
      title: 'App de Tareas',
      description: 'Gestor de tareas con autenticación y sincronización en la nube.',
      image: '',
      demo: '#',
      code: '#'
    }
  ];
}

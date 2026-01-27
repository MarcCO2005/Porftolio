import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    experiences = [
        {
            role: 'Applications Developer',
            company: 'Extramus (Italia)',
            date: 'FEB 2025 - JUN 2025',
            description: [
                'Diseño, despliegue y mantenimiento de aplicaciones web.',
                'Gestión de bases de datos y resolución de problemas en entornos de desarrollo.',
                'Trabajo en equipo en un entorno internacional.'
            ],
            tags: ['Web Dev', 'Database', 'International Team'],
            icon: 'fa-solid fa-rocket',
            isInternship: false
        },
        {
            role: 'Técnico SMR (Prácticas)',
            company: 'UV (Instituto de Robótica)',
            date: 'Feb 2023 - Jun 2023',
            description: [
                'Reparación, mantenimiento y configuración de dispositivos informáticos.',
                'Diseño de aplicaciones web y gestión de bases de datos.'
            ],
            tags: ['Soporte IT', 'Bases de Datos', 'Web Design'],
            icon: 'fa-solid fa-graduation-cap',
            isInternship: true
        }
    ];
}

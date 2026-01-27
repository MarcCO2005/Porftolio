import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {
    education = [
        {
            title: 'Grado Superior en Desarrollo de aplicaciones Multiplataforma',
            school: 'Florida universitaria',
            date: '2025-2026',
            tags: ['React Native', 'Springboot', 'Hibernate', 'Maven'],
            description: 'Enfoque en programación multimedia, dispositivos móviles y sistemas de gestión empresarial. Metodología CoopLearning basada en proyectos reales.',
            modules: [
                'Programación Multimedia y Dispositivos Móviles',
                'Acceso a Datos y Desarrollo de Interfaces',
                'Programación de Servicios y Procesos',
                'Sistemas de Gestión Empresarial'
            ]
        },
        {
            title: 'Grado Superior en Desarrollo de aplicaciones web',
            school: 'Florida universitaria',
            date: '2023-2026',
            tags: ['SYMFONY', 'Angular', 'MySQL', 'AWS'],
            description: 'Formación en entornos de desarrollo cliente-servidor y despliegue de infraestructuras.',
            modules: [
                'Desarrollo Web en Entorno Cliente y Servidor',
                'Despliegue de Aplicaciones Web y Diseño de Interfaces',
                'Gestión de Bases de Datos y Sistemas Informáticos'
            ]
        },
        {
            title: 'Grado Medio Técnico en Sistemas Microinformáticos y Redes',
            school: 'Florida universitaria',
            date: '2021-2023',
            tags: ['Networking', 'Hardware', 'Sistemas Operativos', 'Seguridad'],
            description: 'Especialización técnica en el montaje y mantenimiento de sistemas microinformáticos, redes locales y servicios en red.',
            modules: [
                'Montaje y Mantenimiento de Equipos',
                'Redes Locales y Servicios en Red',
                'Sistemas Operativos Monopuesto y en Red',
                'Seguridad Informática',
                'Aplicaciones Web y Ofimática'
            ]
        }
    ];
}

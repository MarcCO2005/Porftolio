import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLang = signal<Language>('es');

    get language() {
        return this.currentLang();
    }

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('pref-lang', lang);
        }
    }

    toggleLanguage() {
        this.setLanguage(this.language === 'es' ? 'en' : 'es');
    }

    constructor() {
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('pref-lang') as Language;
            if (saved && (saved === 'es' || saved === 'en')) {
                this.currentLang.set(saved);
            }
        }
    }

    // Dictionary
    private translations: any = {
        es: {
            nav: {
                home: 'Inicio',
                about: 'Sobre mí',
                experience: 'Experiencia',
                studies: 'Estudios',
                projects: 'Proyectos',
                contact: 'Contacto'
            },
            jumbotron: {
                role: 'Desarrollador Full-Stack',
                subtitle: 'Especializado en crear soluciones web potentes, limpias y escalables.',
                desc1: 'Apasionado por transformar ideas en código eficiente utilizando PHP, Java y JavaScript',
                desc2: 'Comprometido con la arquitectura de software de calidad y el aprendizaje continuo.',
                desc3: 'Listo para enfrentar nuevos retos tecnológicos y llevar proyectos al siguiente nivel.',
                viewWork: 'Ver mi trabajo',
                contactMe: 'Contáctame',
                scroll: 'Desplázate para ver más'
            },
            about: {
                title: 'Sobre Mí',
                subtitle: 'Compromiso, Innovación y Desarrollo',
                p1: 'Soy un desarrollador Full-Stack con una mentalidad orientada a la resolución de problemas y la excelencia técnica. Mi experiencia abarca desde el frontend con Angular y React hasta ecosistemas backend robustos con Symfony y Laravel.',
                p2: 'Un punto de inflexión en mi carrera fue mi <strong>experiencia Erasmus</strong>, donde realicé mis prácticas profesionales en un entorno internacional. Esta etapa no solo consolidó mis habilidades técnicas, sino que también impulsó mi <strong>dominio del inglés (Nivel B2/C1)</strong>, permitiéndome trabajar en equipos multiculturales con fluidez.',
                p3: 'Me apasiona diseñar arquitecturas limpias y escalables, siempre buscando el equilibrio entre una estética cuidada y un código sólido. Estoy en constante evolución, explorando nuevas tecnologías para ofrecer siempre el mejor resultado posible.'
            },
            experience: {
                title: 'Trayectoria Profesional',
                exp1: {
                    role: 'Applications Developer',
                    company: 'Extramus (Italia)',
                    date: 'FEB 2025 - JUN 2025',
                    desc: [
                        'Diseño, despliegue y mantenimiento de aplicaciones web.',
                        'Gestión de bases de datos y resolución de problemas en entornos de desarrollo.',
                        'Trabajo en equipo en un entorno internacional.'
                    ],
                    tags: ['Web Dev', 'Database', 'International Team']
                },
                exp2: {
                    role: 'Técnico SMR (Prácticas)',
                    company: 'UV (Instituto de Robótica)',
                    date: 'Feb 2023 - Jun 2023',
                    desc: [
                        'Reparación, mantenimiento y configuración de dispositivos informáticos.',
                        'Diseño de aplicaciones web y gestión de bases de datos.'
                    ],
                    tags: ['Soporte IT', 'Bases de Datos', 'Web Design']
                }
            },
            studies: {
                title: 'Estudios',
                item1: {
                    title: 'Grado Superior en Desarrollo de aplicaciones Multiplataforma',
                    school: 'Florida universitaria',
                    date: '2025-2026',
                    desc: 'Enfoque en programación multimedia, dispositivos móviles y sistemas de gestión empresarial. Metodología CoopLearning basada en proyectos reales.',
                    modules: [
                        'Programación Multimedia y Dispositivos Móviles',
                        'Acceso a Datos y Desarrollo de Interfaces',
                        'Programación de Servicios y Procesos',
                        'Sistemas de Gestión Empresarial'
                    ]
                },
                item2: {
                    title: 'Grado Superior en Desarrollo de aplicaciones web',
                    school: 'Florida universitaria',
                    date: '2023-2026',
                    desc: 'Formación en entornos de desarrollo cliente-servidor y despliegue de infraestructuras.',
                    modules: [
                        'Desarrollo Web en Entorno Cliente y Servidor',
                        'Despliegue de Aplicaciones Web y Diseño de Interfaces',
                        'Gestión de Bases de Datos y Sistemas Informáticos'
                    ]
                },
                item3: {
                    title: 'Grado Medio Técnico en Sistemas Microinformáticos y Redes',
                    school: 'Florida universitaria',
                    date: '2021-2023',
                    desc: 'Especialización técnica en el montaje y mantenimiento de sistemas microinformáticos, redes locales y servicios en red.',
                    modules: [
                        'Montaje y Mantenimiento de Equipos',
                        'Redes Locales y Servicios en Red',
                        'Sistemas Operativos Monopuesto y en Red',
                        'Seguridad Informática',
                        'Aplicaciones Web y Ofimática'
                    ]
                }
            },
            projects: {
                title: 'Proyectos',
                p1: {
                    title: 'Portfolio Personal',
                    desc: 'Mi portafolio web hecho con Angular, animaciones y diseño responsive.'
                },
                p2: {
                    title: 'Negombo',
                    desc: 'Página web de rervas de un parque natural.'
                },
                p3: {
                    title: 'Taskly',
                    desc: 'Chatbot de generacion de tareas con IA.'
                },
                viewDemo: 'Ver demo',
                viewCode: 'Ver código',
                website: 'Website',
                video: 'Ver video demo',
                private: 'Privado',
                privateRepo: 'Código Privado'
            },
            contact: {
                title: 'Contacto',
                name: 'Nombre',
                email: 'Email',
                message: 'Mensaje',
                send: 'Enviar',
                placeholderName: 'Tu nombre',
                placeholderEmail: 'tu-email@email.com',
                placeholderMessage: 'Escribe tu mensaje...',
                success: '¡Mensaje enviado correctamente!',
                infoLocation: 'Ubicación',
                valencia: 'Valencia, España'
            },
            footer: {
                location: 'Valencia, España',
                rights: 'Todos los derechos reservados.'
            }
        },
        en: {
            nav: {
                home: 'Home',
                about: 'About',
                experience: 'Experience',
                studies: 'Studies',
                projects: 'Projects',
                contact: 'Contact'
            },
            jumbotron: {
                role: 'Full-Stack Developer',
                subtitle: 'Specialized in creating powerful, clean, and scalable web solutions.',
                desc1: 'Passionate about transforming ideas into efficient code using PHP, Java, and JavaScript',
                desc2: 'Committed to quality software architecture and continuous learning.',
                desc3: 'Ready to face new technological challenges and take projects to the next level.',
                viewWork: 'View my work',
                contactMe: 'Contact me',
                scroll: 'Scroll down to see more'
            },
            about: {
                title: 'About Me',
                subtitle: 'Commitment, Innovation, and Development',
                p1: "I am a Full-Stack developer with a mindset focused on problem solving and technical excellence. My experience ranges from frontend with Angular and React to robust backend ecosystems with Symfony and Laravel.",
                p2: "A turning point in my career was my <strong>Erasmus experience</strong>, where I completed my professional internship in an international environment. This stage not only consolidated my technical skills but also boosted my <strong>English proficiency (B2/C1 level)</strong>, allowing me to work fluibly in multicultural teams.",
                p3: "I am passionate about designing clean and scalable architectures, always seeking the balance between careful aesthetics and solid code. I am in constant evolution, exploring new technologies to always offer the best possible result."
            },
            experience: {
                title: 'Professional Background',
                exp1: {
                    role: 'Applications Developer',
                    company: 'Extramus (Italy)',
                    date: 'FEB 2025 - JUN 2025',
                    desc: [
                        'Design, deployment, and maintenance of web applications.',
                        'Database management and problem solving in development environments.',
                        'Teamwork in an international environment.'
                    ],
                    tags: ['Web Dev', 'Database', 'International Team']
                },
                exp2: {
                    role: 'SMR Technician (Internship)',
                    company: 'UV (Robotics Institute)',
                    date: 'Feb 2023 - Jun 2023',
                    desc: [
                        'Repair, maintenance, and configuration of IT devices.',
                        'Web application design and database management.'
                    ],
                    tags: ['IT Support', 'Databases', 'Web Design']
                }
            },
            studies: {
                title: 'Studies',
                item1: {
                    title: 'Higher Degree in Multiplatform Application Development',
                    school: 'Florida University',
                    date: '2025-2026',
                    desc: 'Focus on multimedia programming, mobile devices, and business management systems. CoopLearning methodology based on real projects.',
                    modules: [
                        'Multimedia and Mobile Device Programming',
                        'Data Access and Interface Development',
                        'Service and Process Programming',
                        'Business Management Systems'
                    ]
                },
                item2: {
                    title: 'Higher Degree in Web Application Development',
                    school: 'Florida University',
                    date: '2023-2026',
                    desc: 'Training in client-server development environments and infrastructure deployment.',
                    modules: [
                        'Web Development in Client and Server Environments',
                        'Web Application Deployment and Interface Design',
                        'Database Management and Information Systems'
                    ]
                },
                item3: {
                    title: 'Intermediate Degree in Microcomputer Systems and Networks',
                    school: 'Florida University',
                    date: '2021-2023',
                    desc: 'Technical specialization in the assembly and maintenance of microcomputer systems, local networks, and network services.',
                    modules: [
                        'Equipment Assembly and Maintenance',
                        'Local Networks and Network Services',
                        'Single-user and Network Operating Systems',
                        'Computer Security',
                        'Web and Office Applications'
                    ]
                }
            },
            projects: {
                title: 'Projects',
                p1: {
                    title: 'Personal Portfolio',
                    desc: 'My web portfolio made with Angular, animations and responsive design.'
                },
                p2: {
                    title: 'Negombo',
                    desc: 'Booking website for a natural park.'
                },
                p3: {
                    title: 'Taskly',
                    desc: 'Task generation chatbot with AI.'
                },
                viewDemo: 'View demo',
                viewCode: 'View code',
                website: 'Website',
                video: 'View video demo',
                private: 'Private',
                privateRepo: 'Private Repository'
            },
            contact: {
                title: 'Contact',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send',
                placeholderName: 'Your name',
                placeholderEmail: 'your-email@email.com',
                placeholderMessage: 'Write your message...',
                success: 'Message sent successfully!',
                infoLocation: 'Location',
                valencia: 'Valencia, Spain'
            },
            footer: {
                location: 'Valencia, Spain',
                rights: 'All rights reserved.'
            }
        }
    };

    t(path: string): string {
        const keys = path.split('.');
        let result = this.translations[this.language];
        for (const key of keys) {
            if (result && result[key]) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    }

    ta(path: string): any[] {
        const keys = path.split('.');
        let result = this.translations[this.language];
        for (const key of keys) {
            if (result && result[key]) {
                result = result[key];
            } else {
                return [];
            }
        }
        return Array.isArray(result) ? result : [];
    }
}

import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-jumbotron',
  imports: [CommonModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent implements OnInit, AfterViewInit {
  @ViewChild('jumbotronBg') jumbotronBg!: ElementRef;
  @ViewChild('jumbotronImg') jumbotronImg!: ElementRef;
  // Configuración del contenido
  title = 'Desarrollador Full-Stack';
  subtitle = 'Especializado en crear soluciones web potentes, limpias y escalables.';
  description = [
    'Apasionado por transformar ideas en código eficiente utilizando PHP, Java y JavaScript',
    'Comprometido con la arquitectura de software de calidad y el aprendizaje continuo.',
    'Listo para enfrentar nuevos retos tecnológicos y llevar proyectos al siguiente nivel.'
  ];

  // Variables para la animación
  titleChars: string[] = [];
  subtitleChars: string[] = [];
  descriptionLines: string[] = [];
  animationStarted = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.initializeAnimations();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  private initScrollAnimations() {
    const bg = this.jumbotronBg.nativeElement;
    const img = this.jumbotronImg.nativeElement;
    const content = bg.querySelector('.jumbotron-content');

    // Timeline for the immersive zoom effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bg,
        start: 'top top',
        end: '+=100%', // Pin for the duration of the viewport height
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Zoom into the image
    tl.to(img, {
      scale: 5, // Deep zoom effect
      opacity: 0,
      ease: 'power1.inOut'
    }, 0);

    // Fade out the content smoothly without zooming or blurring it
    tl.to(content, {
      opacity: 0,
      ease: 'power1.out'
    }, 0);

    // Ensure background also fades out completely at the end
    tl.to(bg, {
      backgroundColor: 'rgba(0,0,0,1)', // Fade to solid black or transparent
      ease: 'none'
    }, 0);
  }

  private initializeAnimations() {
    this.titleChars = this.title.split('');
    this.subtitleChars = this.subtitle.split('');
    this.descriptionLines = this.description;

    // Iniciar animación después de un breve delay
    setTimeout(() => {
      this.animationStarted = true;
    }, 500);
  }

  scrollToSection(selector: string) {
    if (typeof document !== 'undefined') {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}

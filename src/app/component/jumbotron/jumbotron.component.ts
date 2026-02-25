import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationService } from '../../service/translation.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent implements OnInit, AfterViewInit {
  @ViewChild('jumbotronBg') jumbotronBg!: ElementRef;
  @ViewChild('jumbotronImg') jumbotronImg!: ElementRef;

  animationStarted = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public ts: TranslationService
  ) { }

  get titleChars() {
    return this.ts.t('jumbotron.role').split('');
  }

  get subtitleChars() {
    return this.ts.t('jumbotron.subtitle').split('');
  }

  get descriptionLines() {
    return [
      this.ts.t('jumbotron.desc1'),
      this.ts.t('jumbotron.desc2'),
      this.ts.t('jumbotron.desc3')
    ];
  }

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bg,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    tl.to(img, {
      scale: 5,
      opacity: 0,
      ease: 'power1.inOut'
    }, 0);

    tl.to(content, {
      opacity: 0,
      ease: 'power1.out'
    }, 0);

    tl.to(bg, {
      backgroundColor: 'rgba(0,0,0,1)',
      ease: 'none'
    }, 0);
  }

  private initializeAnimations() {
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

import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public ts: TranslationService
  ) { }

  ngAfterViewInit() {
    const section = this.el.nativeElement.querySelector('.contact-section');
    if (section) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(section, 'visible');
          } else {
            this.renderer.removeClass(section, 'visible');
          }
        });
      }, { threshold: 0.1 });
      observer.observe(section);
    }
  }
}

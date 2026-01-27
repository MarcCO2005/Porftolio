import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { ScrollerCarrouselComponent } from '../scroller-carrousel/scroller-carrousel.component';

@Component({
  selector: 'app-about',
  imports: [ScrollerCarrouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const section = this.el.nativeElement.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(section, 'visible');
        } else {
          this.renderer.removeClass(section, 'visible');
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
  }
}

import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const section = this.el.nativeElement.querySelector('.contact-section');
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

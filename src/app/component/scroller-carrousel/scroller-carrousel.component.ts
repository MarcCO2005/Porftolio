import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'scroller-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroller-carrousel.component.html',
  styleUrls: ['./scroller-carrousel.component.css']
})
export class ScrollerCarrouselComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const scrollers = this.el.nativeElement.querySelectorAll('.scroller');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollers.forEach((scroller: HTMLElement) => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item: Element) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }
}

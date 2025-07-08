import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerCarrouselComponent } from './scroller-carrousel.component';

describe('ScrollerCarrouselComponent', () => {
  let component: ScrollerCarrouselComponent;
  let fixture: ComponentFixture<ScrollerCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollerCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollerCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

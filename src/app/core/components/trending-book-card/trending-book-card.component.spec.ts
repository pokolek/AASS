import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBookCardComponent } from './trending-book-card.component';

describe('TrendingBookCardComponent', () => {
  let component: TrendingBookCardComponent;
  let fixture: ComponentFixture<TrendingBookCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingBookCardComponent]
    });
    fixture = TestBed.createComponent(TrendingBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

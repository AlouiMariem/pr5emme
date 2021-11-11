import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyArticleComponent } from './buy-article.component';

describe('BuyArticleComponent', () => {
  let component: BuyArticleComponent;
  let fixture: ComponentFixture<BuyArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

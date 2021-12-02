import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComptesComponent } from './create-comptes.component';

describe('CreateComptesComponent', () => {
  let component: CreateComptesComponent;
  let fixture: ComponentFixture<CreateComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

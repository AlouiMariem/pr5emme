import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComptesComponent } from './read-comptes.component';

describe('ReadComptesComponent', () => {
  let component: ReadComptesComponent;
  let fixture: ComponentFixture<ReadComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

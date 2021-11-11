import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComptesComponent } from './delete-comptes.component';

describe('DeleteComptesComponent', () => {
  let component: DeleteComptesComponent;
  let fixture: ComponentFixture<DeleteComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

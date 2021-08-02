import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantTBComponent } from './etudiant-tb.component';

describe('EtudiantTBComponent', () => {
  let component: EtudiantTBComponent;
  let fixture: ComponentFixture<EtudiantTBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantTBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantTBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

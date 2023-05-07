import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaGeralPdfComponent } from './escala-geral-pdf.component';

describe('EscalaGeralPdfComponent', () => {
  let component: EscalaGeralPdfComponent;
  let fixture: ComponentFixture<EscalaGeralPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaGeralPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaGeralPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

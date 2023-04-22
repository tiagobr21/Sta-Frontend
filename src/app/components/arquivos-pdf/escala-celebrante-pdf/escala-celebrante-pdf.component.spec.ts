import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaCelebrantePdfComponent } from './escala-celebrante-pdf.component';

describe('EscalaCelebrantePdfComponent', () => {
  let component: EscalaCelebrantePdfComponent;
  let fixture: ComponentFixture<EscalaCelebrantePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaCelebrantePdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaCelebrantePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

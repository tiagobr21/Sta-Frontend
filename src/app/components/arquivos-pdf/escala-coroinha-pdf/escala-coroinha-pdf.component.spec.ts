import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaCoroinhaPdfComponent } from './escala-coroinha-pdf.component';

describe('EscalaCoroinhaPdfComponent', () => {
  let component: EscalaCoroinhaPdfComponent;
  let fixture: ComponentFixture<EscalaCoroinhaPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaCoroinhaPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaCoroinhaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaLiturgiaPdfComponent } from './escala-liturgia-pdf.component';

describe('EscalaLiturgiaPdfComponent', () => {
  let component: EscalaLiturgiaPdfComponent;
  let fixture: ComponentFixture<EscalaLiturgiaPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaLiturgiaPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaLiturgiaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

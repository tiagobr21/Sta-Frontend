import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaMinistroPdfComponent } from './escala-ministro-pdf.component';

describe('EscalaMinistroPdfComponent', () => {
  let component: EscalaMinistroPdfComponent;
  let fixture: ComponentFixture<EscalaMinistroPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaMinistroPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaMinistroPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

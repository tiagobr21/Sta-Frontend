import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEscalaComponent } from './consulta-escala.component';

describe('ConsultaEscalaComponent', () => {
  let component: ConsultaEscalaComponent;
  let fixture: ComponentFixture<ConsultaEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

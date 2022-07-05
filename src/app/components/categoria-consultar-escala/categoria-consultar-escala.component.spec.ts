import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaConsultarEscalaComponent } from './categoria-consultar-escala.component';

describe('CategoriaConsultarEscalaComponent', () => {
  let component: CategoriaConsultarEscalaComponent;
  let fixture: ComponentFixture<CategoriaConsultarEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaConsultarEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaConsultarEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

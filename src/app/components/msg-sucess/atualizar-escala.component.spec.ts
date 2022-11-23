import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEscalaComponent } from './atualizar-escala.component';

describe('AtualizarEscalaComponent', () => {
  let component: AtualizarEscalaComponent;
  let fixture: ComponentFixture<AtualizarEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

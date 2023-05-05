import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCelebranteComponent } from './consulta-celebrante.component';

describe('ConsultaCelebranteComponent', () => {
  let component: ConsultaCelebranteComponent;
  let fixture: ComponentFixture<ConsultaCelebranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCelebranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCelebranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

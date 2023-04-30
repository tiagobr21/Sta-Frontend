import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarLiturgiaComponent } from './consultar-liturgia.component';

describe('ConsultarLiturgiaComponent', () => {
  let component: ConsultarLiturgiaComponent;
  let fixture: ComponentFixture<ConsultarLiturgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarLiturgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarLiturgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

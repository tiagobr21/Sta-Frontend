import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCoroinhaComponent } from './consultar-coroinha.component';

describe('ConsultarCoroinhaComponent', () => {
  let component: ConsultarCoroinhaComponent;
  let fixture: ComponentFixture<ConsultarCoroinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCoroinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCoroinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

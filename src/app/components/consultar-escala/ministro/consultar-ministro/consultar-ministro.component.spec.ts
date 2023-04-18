import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMinistroComponent } from './consultar-ministro.component';

describe('ConsultarMinistroComponent', () => {
  let component: ConsultarMinistroComponent;
  let fixture: ComponentFixture<ConsultarMinistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMinistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarMinistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

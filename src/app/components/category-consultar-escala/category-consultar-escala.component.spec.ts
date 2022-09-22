import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryConsultarEscalaComponent } from './category-consultar-escala.component';

describe('CategoryConsultarEscalaComponent', () => {
  let component: CategoryConsultarEscalaComponent;
  let fixture: ComponentFixture<CategoryConsultarEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryConsultarEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryConsultarEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

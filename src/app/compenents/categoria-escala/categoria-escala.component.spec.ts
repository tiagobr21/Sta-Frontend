import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEscalaComponent } from './categoria-escala.component';

describe('CategoriaEscalaComponent', () => {
  let component: CategoriaEscalaComponent;
  let fixture: ComponentFixture<CategoriaEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

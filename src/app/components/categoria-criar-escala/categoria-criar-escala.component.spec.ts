import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCriarEscalaComponent } from './categoria-criar-escala.component';

describe('CategoriaCriarEscalaComponent', () => {
  let component: CategoriaCriarEscalaComponent;
  let fixture: ComponentFixture<CategoriaCriarEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaCriarEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCriarEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

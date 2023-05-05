import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaGeralComponent } from './escala-geral.component';

describe('EscalaGeralComponent', () => {
  let component: EscalaGeralComponent;
  let fixture: ComponentFixture<EscalaGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

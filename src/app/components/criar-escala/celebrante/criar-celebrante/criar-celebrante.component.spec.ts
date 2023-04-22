import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCelebranteComponent } from './criar-celebrante.component';

describe('CriarCelebranteComponent', () => {
  let component: CriarCelebranteComponent;
  let fixture: ComponentFixture<CriarCelebranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCelebranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCelebranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

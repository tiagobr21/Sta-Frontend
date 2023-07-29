import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboracaoComponent } from './colaboracao.component';

describe('ColaboracaoComponent', () => {
  let component: ColaboracaoComponent;
  let fixture: ComponentFixture<ColaboracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

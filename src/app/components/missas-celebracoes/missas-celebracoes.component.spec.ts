import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissasCelebracoesComponent } from './missas-celebracoes.component';

describe('MissasCelebracoesComponent', () => {
  let component: MissasCelebracoesComponent;
  let fixture: ComponentFixture<MissasCelebracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissasCelebracoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissasCelebracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

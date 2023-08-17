import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoPedroDoacoesComponent } from './sao-pedro-doacoes.component';

describe('SaoPedroDoacoesComponent', () => {
  let component: SaoPedroDoacoesComponent;
  let fixture: ComponentFixture<SaoPedroDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoPedroDoacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaoPedroDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

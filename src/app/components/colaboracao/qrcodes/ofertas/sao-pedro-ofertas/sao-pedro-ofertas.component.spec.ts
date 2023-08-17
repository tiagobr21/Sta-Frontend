import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoPedroOfertasComponent } from './sao-pedro-ofertas.component';

describe('SaoPedroOfertasComponent', () => {
  let component: SaoPedroOfertasComponent;
  let fixture: ComponentFixture<SaoPedroOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoPedroOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaoPedroOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

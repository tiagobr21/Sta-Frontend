import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoPedroComponent } from './sao-pedro.component';

describe('SaoPedroComponent', () => {
  let component: SaoPedroComponent;
  let fixture: ComponentFixture<SaoPedroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoPedroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaoPedroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

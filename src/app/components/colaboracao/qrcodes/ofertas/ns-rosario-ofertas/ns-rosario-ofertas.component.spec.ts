import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsRosarioOfertasComponent } from './ns-rosario-ofertas.component';

describe('NsRosarioOfertasComponent', () => {
  let component: NsRosarioOfertasComponent;
  let fixture: ComponentFixture<NsRosarioOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsRosarioOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsRosarioOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

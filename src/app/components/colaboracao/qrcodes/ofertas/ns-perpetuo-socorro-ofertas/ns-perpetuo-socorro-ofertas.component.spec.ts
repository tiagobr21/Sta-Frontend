import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsPerpetuoSocorroOfertasComponent } from './ns-perpetuo-socorro-ofertas.component';

describe('NsPerpetuoSocorroOfertasComponent', () => {
  let component: NsPerpetuoSocorroOfertasComponent;
  let fixture: ComponentFixture<NsPerpetuoSocorroOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsPerpetuoSocorroOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsPerpetuoSocorroOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

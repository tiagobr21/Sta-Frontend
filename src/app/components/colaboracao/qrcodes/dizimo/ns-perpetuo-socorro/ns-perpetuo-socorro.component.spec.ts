import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsPerpetuoSocorroComponent } from './ns-perpetuo-socorro.component';

describe('NsPerpetuoSocorroComponent', () => {
  let component: NsPerpetuoSocorroComponent;
  let fixture: ComponentFixture<NsPerpetuoSocorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsPerpetuoSocorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsPerpetuoSocorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

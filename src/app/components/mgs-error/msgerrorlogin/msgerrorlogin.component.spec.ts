import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgerrorloginComponent } from './msgerrorlogin.component';

describe('MsgerrorloginComponent', () => {
  let component: MsgerrorloginComponent;
  let fixture: ComponentFixture<MsgerrorloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgerrorloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgerrorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

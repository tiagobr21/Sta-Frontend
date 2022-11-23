import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSucessComponent } from './msg-sucess.component';

describe('MsgSucessComponent', () => {
  let component: MsgSucessComponent;
  let fixture: ComponentFixture<MsgSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

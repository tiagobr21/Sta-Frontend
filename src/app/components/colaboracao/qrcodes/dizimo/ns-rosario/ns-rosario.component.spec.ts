import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsRosarioComponent } from './ns-rosario.component';

describe('NsRosarioComponent', () => {
  let component: NsRosarioComponent;
  let fixture: ComponentFixture<NsRosarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsRosarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsRosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

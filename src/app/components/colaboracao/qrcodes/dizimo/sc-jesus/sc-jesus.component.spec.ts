import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScJesusComponent } from './sc-jesus.component';

describe('ScJesusComponent', () => {
  let component: ScJesusComponent;
  let fixture: ComponentFixture<ScJesusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScJesusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScJesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

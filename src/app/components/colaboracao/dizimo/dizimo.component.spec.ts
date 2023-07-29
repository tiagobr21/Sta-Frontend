import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizimoComponent } from './dizimo.component';

describe('DizimoComponent', () => {
  let component: DizimoComponent;
  let fixture: ComponentFixture<DizimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DizimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

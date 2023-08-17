import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaTeresinhaComponent } from './santa-teresinha.component';

describe('SantaTeresinhaComponent', () => {
  let component: SantaTeresinhaComponent;
  let fixture: ComponentFixture<SantaTeresinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaTeresinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantaTeresinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

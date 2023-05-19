import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHomePageComponent } from './config-home-page.component';

describe('ConfigHomePageComponent', () => {
  let component: ConfigHomePageComponent;
  let fixture: ComponentFixture<ConfigHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

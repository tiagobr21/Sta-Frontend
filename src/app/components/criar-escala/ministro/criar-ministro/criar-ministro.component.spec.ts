import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMinistroComponent } from './criar-ministro.component';

describe('CriarMinistroComponent', () => {
  let component: CriarMinistroComponent;
  let fixture: ComponentFixture<CriarMinistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMinistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarMinistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

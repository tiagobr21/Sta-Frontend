import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCoroinhaComponent } from './criar-coroinha.component';

describe('CriarCoroinhaComponent', () => {
  let component: CriarCoroinhaComponent;
  let fixture: ComponentFixture<CriarCoroinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCoroinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCoroinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

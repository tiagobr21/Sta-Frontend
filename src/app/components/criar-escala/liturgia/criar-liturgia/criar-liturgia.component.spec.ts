import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLiturgiaComponent } from './criar-liturgia.component';

describe('CriarLiturgiaComponent', () => {
  let component: CriarLiturgiaComponent;
  let fixture: ComponentFixture<CriarLiturgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarLiturgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarLiturgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

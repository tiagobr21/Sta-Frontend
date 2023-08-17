import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaTeresinhaOfertasComponent } from './santa-teresinha-ofertas.component';

describe('SantaTeresinhaOfertasComponent', () => {
  let component: SantaTeresinhaOfertasComponent;
  let fixture: ComponentFixture<SantaTeresinhaOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaTeresinhaOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantaTeresinhaOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

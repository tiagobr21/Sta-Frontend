import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScJesusOfertasComponent } from './sc-jesus-ofertas.component';

describe('ScJesusOfertasComponent', () => {
  let component: ScJesusOfertasComponent;
  let fixture: ComponentFixture<ScJesusOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScJesusOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScJesusOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScJesusDoacoesComponent } from './sc-jesus-doacoes.component';

describe('ScJesusDoacoesComponent', () => {
  let component: ScJesusDoacoesComponent;
  let fixture: ComponentFixture<ScJesusDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScJesusDoacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScJesusDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

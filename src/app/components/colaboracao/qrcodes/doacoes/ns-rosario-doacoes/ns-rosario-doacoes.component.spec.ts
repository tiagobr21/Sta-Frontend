import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsRosarioDoacoesComponent } from './ns-rosario-doacoes.component';

describe('NsRosarioDoacoesComponent', () => {
  let component: NsRosarioDoacoesComponent;
  let fixture: ComponentFixture<NsRosarioDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsRosarioDoacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsRosarioDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

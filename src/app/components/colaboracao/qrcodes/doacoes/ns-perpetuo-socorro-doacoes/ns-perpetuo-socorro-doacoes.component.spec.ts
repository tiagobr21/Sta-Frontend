import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsPerpetuoSocorroDoacoesComponent } from './ns-perpetuo-socorro-doacoes.component';

describe('NsPerpetuoSocorroDoacoesComponent', () => {
  let component: NsPerpetuoSocorroDoacoesComponent;
  let fixture: ComponentFixture<NsPerpetuoSocorroDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsPerpetuoSocorroDoacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsPerpetuoSocorroDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

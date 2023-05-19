import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAvisoComponent } from './upload-aviso.component';

describe('UploadAvisoComponent', () => {
  let component: UploadAvisoComponent;
  let fixture: ComponentFixture<UploadAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAvisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

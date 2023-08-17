import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaTeresinhaDoacoesComponent } from './santa-teresinha-doacoes.component';

describe('SantaTeresinhaDoacoesComponent', () => {
  let component: SantaTeresinhaDoacoesComponent;
  let fixture: ComponentFixture<SantaTeresinhaDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaTeresinhaDoacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantaTeresinhaDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

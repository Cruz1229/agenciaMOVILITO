import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionNuevosComponent } from './promocion-nuevos.component';

describe('PromocionNuevosComponent', () => {
  let component: PromocionNuevosComponent;
  let fixture: ComponentFixture<PromocionNuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocionNuevosComponent]
    });
    fixture = TestBed.createComponent(PromocionNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

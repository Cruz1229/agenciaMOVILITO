import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionSeminuevosComponent } from './promocion-seminuevos.component';

describe('PromocionSeminuevosComponent', () => {
  let component: PromocionSeminuevosComponent;
  let fixture: ComponentFixture<PromocionSeminuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocionSeminuevosComponent]
    });
    fixture = TestBed.createComponent(PromocionSeminuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionSeminuevosComponent } from './cotizacion-seminuevos.component';

describe('CotizacionSeminuevosComponent', () => {
  let component: CotizacionSeminuevosComponent;
  let fixture: ComponentFixture<CotizacionSeminuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionSeminuevosComponent]
    });
    fixture = TestBed.createComponent(CotizacionSeminuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

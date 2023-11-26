import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionServiciosComponent } from './promocion-servicios.component';

describe('PromocionServiciosComponent', () => {
  let component: PromocionServiciosComponent;
  let fixture: ComponentFixture<PromocionServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocionServiciosComponent]
    });
    fixture = TestBed.createComponent(PromocionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

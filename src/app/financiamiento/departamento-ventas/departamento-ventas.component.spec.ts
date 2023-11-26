import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoVentasComponent } from './departamento-ventas.component';

describe('DepartamentoVentasComponent', () => {
  let component: DepartamentoVentasComponent;
  let fixture: ComponentFixture<DepartamentoVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoVentasComponent]
    });
    fixture = TestBed.createComponent(DepartamentoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

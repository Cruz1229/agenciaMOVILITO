import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioNuevosComponent } from './inventario-nuevos.component';

describe('InventarioNuevosComponent', () => {
  let component: InventarioNuevosComponent;
  let fixture: ComponentFixture<InventarioNuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioNuevosComponent]
    });
    fixture = TestBed.createComponent(InventarioNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

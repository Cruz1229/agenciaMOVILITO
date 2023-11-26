import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaManejoSeminuevosComponent } from './prueba-manejo-seminuevos.component';

describe('PruebaManejoSeminuevosComponent', () => {
  let component: PruebaManejoSeminuevosComponent;
  let fixture: ComponentFixture<PruebaManejoSeminuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaManejoSeminuevosComponent]
    });
    fixture = TestBed.createComponent(PruebaManejoSeminuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

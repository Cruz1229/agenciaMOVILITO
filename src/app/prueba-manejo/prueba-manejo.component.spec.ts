import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaManejoComponent } from './prueba-manejo.component';

describe('PruebaManejoComponent', () => {
  let component: PruebaManejoComponent;
  let fixture: ComponentFixture<PruebaManejoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaManejoComponent]
    });
    fixture = TestBed.createComponent(PruebaManejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

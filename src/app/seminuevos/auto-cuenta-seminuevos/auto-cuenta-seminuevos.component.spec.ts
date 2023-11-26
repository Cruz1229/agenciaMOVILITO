import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCuentaSeminuevosComponent } from './auto-cuenta-seminuevos.component';

describe('AutoCuentaSeminuevosComponent', () => {
  let component: AutoCuentaSeminuevosComponent;
  let fixture: ComponentFixture<AutoCuentaSeminuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCuentaSeminuevosComponent]
    });
    fixture = TestBed.createComponent(AutoCuentaSeminuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

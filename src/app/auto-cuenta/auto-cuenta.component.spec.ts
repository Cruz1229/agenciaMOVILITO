import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCuentaComponent } from './auto-cuenta.component';

describe('AutoCuentaComponent', () => {
  let component: AutoCuentaComponent;
  let fixture: ComponentFixture<AutoCuentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCuentaComponent]
    });
    fixture = TestBed.createComponent(AutoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

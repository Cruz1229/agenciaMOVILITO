import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefaccionesOriginalesComponent } from './refacciones-originales.component';

describe('RefaccionesOriginalesComponent', () => {
  let component: RefaccionesOriginalesComponent;
  let fixture: ComponentFixture<RefaccionesOriginalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefaccionesOriginalesComponent]
    });
    fixture = TestBed.createComponent(RefaccionesOriginalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

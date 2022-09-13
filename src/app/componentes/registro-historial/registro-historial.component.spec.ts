import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHistorialComponent } from './registro-historial.component';

describe('RegistroHistorialComponent', () => {
  let component: RegistroHistorialComponent;
  let fixture: ComponentFixture<RegistroHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

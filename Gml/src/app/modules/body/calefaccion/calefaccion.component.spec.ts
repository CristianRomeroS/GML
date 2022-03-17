import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalefaccionComponent } from './calefaccion.component';

describe('CalefaccionComponent', () => {
  let component: CalefaccionComponent;
  let fixture: ComponentFixture<CalefaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalefaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalefaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

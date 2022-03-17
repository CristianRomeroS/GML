import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaneamientosComponent } from './saneamientos.component';

describe('SaneamientosComponent', () => {
  let component: SaneamientosComponent;
  let fixture: ComponentFixture<SaneamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaneamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaneamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalderasComponent } from './calderas.component';

describe('CalderasComponent', () => {
  let component: CalderasComponent;
  let fixture: ComponentFixture<CalderasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalderasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

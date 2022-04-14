import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AireacondicionadoComponent } from './aireacondicionado.component';

describe('AireacondicionadoComponent', () => {
  let component: AireacondicionadoComponent;
  let fixture: ComponentFixture<AireacondicionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AireacondicionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AireacondicionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

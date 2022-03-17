import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerotermiaComponent } from './aerotermia.component';

describe('AerotermiaComponent', () => {
  let component: AerotermiaComponent;
  let fixture: ComponentFixture<AerotermiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerotermiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AerotermiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

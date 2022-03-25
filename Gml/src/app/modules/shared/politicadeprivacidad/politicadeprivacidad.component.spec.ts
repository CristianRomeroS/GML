import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticadeprivacidadComponent } from './politicadeprivacidad.component';

describe('PoliticadeprivacidadComponent', () => {
  let component: PoliticadeprivacidadComponent;
  let fixture: ComponentFixture<PoliticadeprivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticadeprivacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticadeprivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentbodyComponent } from './contentbody.component';

describe('ContentbodyComponent', () => {
  let component: ContentbodyComponent;
  let fixture: ComponentFixture<ContentbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

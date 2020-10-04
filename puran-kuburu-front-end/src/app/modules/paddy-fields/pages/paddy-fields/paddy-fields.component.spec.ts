import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddyFieldsComponent } from './paddy-fields.component';

describe('PaddyFieldsComponent', () => {
  let component: PaddyFieldsComponent;
  let fixture: ComponentFixture<PaddyFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddyFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

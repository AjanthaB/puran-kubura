import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaddyFieldComponent } from './add-paddy-field.component';

describe('AddPaddyFieldComponent', () => {
  let component: AddPaddyFieldComponent;
  let fixture: ComponentFixture<AddPaddyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaddyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaddyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

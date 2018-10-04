import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideousComponent } from './add-videous.component';

describe('AddVideousComponent', () => {
  let component: AddVideousComponent;
  let fixture: ComponentFixture<AddVideousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVideousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVideousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

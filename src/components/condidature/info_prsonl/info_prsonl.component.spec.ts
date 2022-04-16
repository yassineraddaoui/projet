/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Info_prsonlComponent } from './info_prsonl.component';

describe('Info_prsonlComponent', () => {
  let component: Info_prsonlComponent;
  let fixture: ComponentFixture<Info_prsonlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info_prsonlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info_prsonlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

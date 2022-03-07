/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrereComponent } from './frere.component';

describe('FrereComponent', () => {
  let component: FrereComponent;
  let fixture: ComponentFixture<FrereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

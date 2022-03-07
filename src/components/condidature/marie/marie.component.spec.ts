/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarieComponent } from './marie.component';

describe('MarieComponent', () => {
  let component: MarieComponent;
  let fixture: ComponentFixture<MarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

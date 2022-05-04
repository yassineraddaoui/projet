/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TstComponent } from './tst.component';

describe('TstComponent', () => {
  let component: TstComponent;
  let fixture: ComponentFixture<TstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

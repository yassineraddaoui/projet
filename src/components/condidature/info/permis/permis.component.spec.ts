/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PermisComponent } from './permis.component';

describe('PermisComponent', () => {
  let component: PermisComponent;
  let fixture: ComponentFixture<PermisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpécialitéComponent } from './spécialité.component';

describe('SpécialitéComponent', () => {
  let component: SpécialitéComponent;
  let fixture: ComponentFixture<SpécialitéComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpécialitéComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpécialitéComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

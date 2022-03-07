/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SupérieurComponent } from './supérieur.component';

describe('SupérieurComponent', () => {
  let component: SupérieurComponent;
  let fixture: ComponentFixture<SupérieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupérieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupérieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

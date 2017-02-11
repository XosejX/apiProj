/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BodyMainComponent } from './body-main.component';

describe('BodyMainComponent', () => {
  let component: BodyMainComponent;
  let fixture: ComponentFixture<BodyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BodyActorComponent } from './body-actor.component';

describe('BodyActorComponent', () => {
  let component: BodyActorComponent;
  let fixture: ComponentFixture<BodyActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

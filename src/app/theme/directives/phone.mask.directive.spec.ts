import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PhoneMaskDirective} from './phone-mask.directive';

@Component({
    template: '<div appPhoneMask>Testing  TestPhoneMaskComponent </div>',
  })
  class TestPhoneMaskComponent {}

describe('MaskDateDirective', () => {
    let fixture: ComponentFixture<TestPhoneMaskComponent>;
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [PhoneMaskDirective],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      }).createComponent(TestPhoneMaskComponent);

      fixture.detectChanges();
    });


    });

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {OnlyNumberDirective} from './only-number.directive';

@Component({
    template: '<div input[onlyNumber]>Testing  TestOnlyNumberComponent </div>',
  })
  class TestOnlyNumberComponent {}

describe('MaskDateDirective', () => {
    let fixture: ComponentFixture<TestOnlyNumberComponent>;
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [OnlyNumberDirective],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      }).createComponent(TestOnlyNumberComponent);

      fixture.detectChanges();
    });


    });

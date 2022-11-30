import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaskDateDirective } from "./mask-date.directive";

@Component({
  template: "<div appMaskDate>Testing  TestMaskDateComponent </div>",
})
class TestMaskDateComponent {}

describe("MaskDateDirective", () => {
  let fixture: ComponentFixture<TestMaskDateComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MaskDateDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).createComponent(TestMaskDateComponent);

    fixture.detectChanges();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { Toolbar1Component } from "./toolbar1.component";

describe("Toolbar1Component", () => {
  let component: Toolbar1Component;
  let fixture: ComponentFixture<Toolbar1Component>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Toolbar1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Toolbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("sidenavToggle Called", () => {
    spyOn(component, "sidenavToggle").and.callThrough();
    component.sidenavToggle();
    expect(component.sidenavToggle).toHaveBeenCalled();
  });
});

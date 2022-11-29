import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let values: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call ngOnInit Called", () => {
    spyOn(component, "ngOnInit").and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it("should call onFeedbackFormSubmit Called", () => {
    spyOn(component, "onFeedbackFormSubmit").and.callThrough();
    component.onFeedbackFormSubmit(values);
    expect(component.onFeedbackFormSubmit).toHaveBeenCalled();
  });

  it("should call onSubscribeFormSubmit Called", () => {
    spyOn(component, "onSubscribeFormSubmit").and.callThrough();
    component.onSubscribeFormSubmit(values);
    expect(component.onSubscribeFormSubmit).toHaveBeenCalled();
  });
});

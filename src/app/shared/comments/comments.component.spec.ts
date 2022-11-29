import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AppModule } from "src/app/app.module";
import { AppService } from "src/app/app.service";
import { CommentsComponent } from "./comments.component";

describe("CommentsComponent", () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let service: any;
  const commentForm = FormGroup;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule,
        AppModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AppService); // inject AppService service here

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // saveReview method called
  it("should called saveReview Method", () => {
    spyOn(component, "saveReview");
    component.saveReview(commentForm);
    expect(component.saveReview).toHaveBeenCalled();
  });

  // test for Negative state  comment form
  it("Form is invalid when all feilds are not properly filled", () => {
    component.commentForm?.controls.rate.setValue("352");
    component.commentForm?.controls.review.setValue("");
    component.commentForm?.controls.name.setValue("");
    component.commentForm?.controls.email.setValue("svgmail.com");
    expect(component.commentForm.valid).toBeFalsy();
  });

  // test for Positive state form
  it("Form is valid when all feilds are properly filled", () => {
    component.commentForm?.controls.rate.setValue("1");
    component.commentForm?.controls.review.setValue("good");
    component.commentForm?.controls.name.setValue("Siva Valeti");
    component.commentForm?.controls.email.setValue("s@vgmail.com");
    expect(component.commentForm.valid).toBeTruthy();
  });

  // submit comments form
  it("should post form comments   and submit review btn click", (done: DoneFn) => {
    component.commentForm?.controls.rate.setValue("1"),
      component.commentForm?.controls.review.setValue("good"),
      component.commentForm?.controls.name.setValue("Siva Valeti"),
      component.commentForm?.controls.email.setValue("s@vgmail.com"),
      fixture.detectChanges();
    spyOn(component, "onCommentFormSubmit").and.callThrough();
    component.onCommentFormSubmit(component.commentForm.value);
    expect(component.onCommentFormSubmit).toHaveBeenCalled();

    const mockResponse = {
      message: "Success",
    };
    fixture.detectChanges();
    spyOn(component.http, "post")
      .withArgs(component.reviewApi, component.commentForm.value)
      .and.returnValue(of(mockResponse));
    component.http
      .post(component.reviewApi, component.commentForm.value)
      .subscribe(
        (res: any) => {
          expect(res).toEqual(mockResponse);
          done();
        },
        () => {
          console.log("SOME ERROR OCCURED.");
          done();
        }
      );
  });

  it("should return error when wrong employee details sent", () => {
    component.commentForm?.controls.rate.setValue("");
    component.commentForm?.controls.review.setValue("");
    component.commentForm?.controls.name.setValue("");
    component.commentForm?.controls.email.setValue("");

    spyOn(component.http, "post")
      .withArgs(component.reviewApi, component.commentForm.value)
      .and.throwError("404");
    expect((): void => {
      component.http.post(component.reviewApi, component.commentForm.value);
    }).toThrow(new Error("404"));
  });

  // rating method called
  it(" should call rate", () => {
    spyOn(component, "rate").and.callThrough();
    const mockRateResponse = {
      tooltip: "Dissatisfied",
      icon: "sentiment_dissatisfied",
      percentage: 80,
      selected: false,
    };
    component.rate(mockRateResponse);
    expect(component.rate).toHaveBeenCalledWith(mockRateResponse);
  });
});

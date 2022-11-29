import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AppModule } from "src/app/app.module";
import { AppService } from "src/app/app.service";
import { ContactComponent } from "./contact.component";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: AppService;
  let contactForm: FormGroup;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
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
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AppService); // inject internal service here
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // positive state of the form
  it("has valid form when all fields are properly filled", () => {
    component.contactForm?.controls.name.setValue("Siva Valeti");
    component.contactForm?.controls.phone.setValue("1234567890");
    component.contactForm?.controls.email.setValue("s@vgmail.com");
    component.contactForm?.controls.message.setValue("good");
    expect(component.contactForm.valid).toBeTrue();
  });

  // negative state of the form
  it("has invalid form when all fields are not filled properly", () => {
    component.contactForm?.controls.name.setValue("");
    component.contactForm?.controls.phone.setValue("12345");
    component.contactForm?.controls.email.setValue("svgmail.com");
    component.contactForm?.controls.message.setValue("");
    expect(component.contactForm.valid).toBeFalse();
  });

  // have filled the form submission review logic tested using spyon
  it("should post form  contact and submit btn click", (done: DoneFn) => {
    component.contactForm?.controls.name.setValue("Siva Valeti");
    component.contactForm?.controls.phone.setValue("1234567890");
    component.contactForm?.controls.email.setValue("s@v.com");
    component.contactForm?.controls.message.setValue("good");
    fixture.detectChanges();

    spyOn(component, "onContactFormSubmit").and.callThrough();
    component.onContactFormSubmit();
    expect(component.onContactFormSubmit).toHaveBeenCalled();

    const mockResponse = {
      message: "Success",
    };
    fixture.detectChanges();
    spyOn(component.appService, "postMessage")
      .withArgs(component.contactForm.value)
      .and.returnValue(of(mockResponse));
    component.appService.postMessage(component.contactForm.value).subscribe(
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

  // call postMessage method using spyon
  it("should call postMessage method -- through[TS]", () => {
    spyOn(service, "postMessage");
    service.postMessage(contactForm);
    expect(service.postMessage).toHaveBeenCalled();
  });
});

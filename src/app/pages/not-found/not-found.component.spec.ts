import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "src/app/app.module";
import { NotFoundComponent } from "./not-found.component";

const routerSpy = { navigate: jasmine.createSpy("navigate") };
describe("NotFoundComponent", () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, AppModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // navigates to home page
  it("should navigate to home on click of home button", () => {
    component.goHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
  });
});

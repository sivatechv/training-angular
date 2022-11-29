import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "src/app/app.module";
import { HomeComponent } from "./home.component";
import { HomeModule } from "./home.module";

const routerSpy = { navigate: jasmine.createSpy("navigate") };
describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HomeModule, AppModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // navigates to aboutus page
  it("should navigate to aboutus on click of Read more button", () => {
    component.navigateAboutus();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/about"]);
  });
});

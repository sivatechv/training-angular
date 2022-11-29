import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { PagesComponent } from "./pages.component";

describe("PagesComponent", () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let theme: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // call ngoninit method
  it("should call ngOnInit Called", () => {
    spyOn(component, "ngOnInit").and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it("should call changeTheme Called", () => {
    spyOn(component, "changeTheme").and.callThrough();
    component.changeTheme(theme);
    expect(component.changeTheme).toHaveBeenCalled();
  });

  it("should call chooseHeaderType Called", () => {
    spyOn(component, "chooseHeaderType").and.callThrough();
    component.chooseHeaderType();
    expect(component.chooseHeaderType).toHaveBeenCalled();
  });

  it(" should call scrollToTop Called", () => {
    spyOn(component, "scrollToTop").and.callThrough();
    component.scrollToTop();
    expect(component.scrollToTop).toHaveBeenCalled();
  });

  it("onWindowScroll Called", () => {
    spyOn(component, "onWindowScroll").and.callThrough();
    component.onWindowScroll();
    expect(component.onWindowScroll).toHaveBeenCalled();
  });
});

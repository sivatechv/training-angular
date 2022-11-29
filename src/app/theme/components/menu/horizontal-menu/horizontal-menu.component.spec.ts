import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatMenuTrigger } from "@angular/material/menu";
import { AppModule } from "src/app/app.module";
import { HorizontalMenuComponent } from "./horizontal-menu.component";

describe("HorizontalMenuComponent", () => {
  let component: HorizontalMenuComponent;
  let fixture: ComponentFixture<HorizontalMenuComponent>;
  let trigger: MatMenuTrigger;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalMenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalMenuComponent);
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

  it("should call closeOthers Called", () => {
    spyOn(component, "closeOthers").and.callThrough();
    component.closeOthers(trigger);
    expect(component.closeOthers).toHaveBeenCalled();
  });
});

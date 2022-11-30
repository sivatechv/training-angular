import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AppModule } from "src/app/app.module";
import { MenuSingleComponent } from "./menu-single.component";

describe("MenuSingleComponent", () => {
  let component: MenuSingleComponent;
  let fixture: ComponentFixture<MenuSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSingleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, AppModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 25 }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSingleComponent);
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

  // call getMenuItemById
  it("should call getMenuItemById Called", () => {
    spyOn(component, "getMenuItemById").withArgs(25);
    component.getMenuItemById(25);
    expect(component.getMenuItemById).toHaveBeenCalledWith(25);
  });

  // call unsubscribes
  it("unsubscribes when destoryed", () => {
    spyOn(component.sub, "unsubscribe");
    component.ngOnDestroy();
    expect(component.sub.unsubscribe).toHaveBeenCalledTimes(1);
  });
});

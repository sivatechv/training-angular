import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { MenuItemsCarouselComponent } from "./menu-items-carousel.component";

describe("MenuItemsCarouselComponent", () => {
  let component: MenuItemsCarouselComponent;
  let fixture: ComponentFixture<MenuItemsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemsCarouselComponent],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call ngAfterViewInit Called", () => {
    spyOn(component, "ngAfterViewInit").and.callThrough();
    component.ngAfterViewInit();
    expect(component.ngAfterViewInit).toHaveBeenCalled();
  });
});

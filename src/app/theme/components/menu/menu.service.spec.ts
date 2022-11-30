import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { MenuService } from "./menu.service";

describe("MenuService", () => {
  let service: MenuService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule, AppModule],
      providers: [MenuService],
    });
    service = TestBed.inject(MenuService);
  });

  beforeEach(() => {});

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getHorizontalMenuItems Called", () => {
    spyOn(service, "getHorizontalMenuItems").and.callThrough();
    service.getHorizontalMenuItems();
    expect(service.getHorizontalMenuItems).toHaveBeenCalled();
  });
});

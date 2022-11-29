import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GetInTouchComponent } from "./get-in-touch.component";

describe("GetInTouchComponent", () => {
  let component: GetInTouchComponent;
  let fixture: ComponentFixture<GetInTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetInTouchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

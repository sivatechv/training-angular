import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AppModule } from "./app.module";

import { AppService } from "./app.service";

describe("AppService", () => {
  let service: AppService;
  // Setup spy
  let http: jasmine.SpyObj<HttpClient>;
  let datePipe: any;
  let dialog: any;
  let appSettings: any;
  let translateService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule, AppModule],
      providers: [AppService],
    });
    service = TestBed.inject(AppService);
  });

  // setting up spy
  beforeEach(() => {
    http = jasmine.createSpyObj("HttpClient", ["post"]);
    service = new AppService(
      http,
      datePipe,
      dialog,
      appSettings,
      translateService
    );
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  // get in touch contact submit form post method
  it("should post conatct submit when called [HTTP SPY]", (done: DoneFn) => {
    // mock data for getintouch contact response
    const mockResponse = {
      name: "Siva Valeti",
      email: "S@v.com",
      phone: "1234567",
      message: "good",
    };

    http.post.and.returnValue(of(mockResponse));

    service.postMessage({}).subscribe({
      next: (res: any) => {
        expect(res).toEqual(mockResponse);
        done();
      },
      error: done.fail,
    });
  });
});

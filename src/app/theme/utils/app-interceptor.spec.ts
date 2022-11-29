import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed } from '@angular/core/testing';
import { AppInterceptor } from './app-interceptor';

describe('AppInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true,
        },
        AppInterceptor
      ]
    });
  });

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

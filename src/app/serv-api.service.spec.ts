/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServApiService } from './serv-api.service';

describe('ServApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServApiService]
    });
  });

  it('should ...', inject([ServApiService], (service: ServApiService) => {
    expect(service).toBeTruthy();
  }));
});

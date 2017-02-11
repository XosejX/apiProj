/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServThemesService } from './serv-themes.service';

describe('ServThemesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServThemesService]
    });
  });

  it('should ...', inject([ServThemesService], (service: ServThemesService) => {
    expect(service).toBeTruthy();
  }));
});

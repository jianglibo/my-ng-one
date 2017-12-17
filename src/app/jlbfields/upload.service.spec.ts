import { TestBed, inject } from '@angular/core/testing';

import { UploadService } from './upload.service';
import { HttpClient } from '@angular/common/http';

const hc = <HttpClient>{};

describe('UploadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [UploadService, {provide: HttpClient, useValue: hc}]
    });
  });

  it('should be created', inject([UploadService], (service: UploadService) => {
    expect(service).toBeTruthy();
  }));
});

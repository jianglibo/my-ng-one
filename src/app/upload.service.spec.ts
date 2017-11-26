import { TestBed, inject } from '@angular/core/testing';

import { UploadService } from './upload.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UploadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UploadService]
    });
  });

  it('should be created', inject([UploadService], (service: UploadService) => {
    expect(service).toBeTruthy();
  }));
});

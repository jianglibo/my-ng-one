import { TestBed, inject } from '@angular/core/testing';

import { TtSsService } from './tt-ss.service';
import { HttpClient } from '@angular/common/http';

const hc = <HttpClient>{};

describe('TtSsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TtSsService, {provide: HttpClient, useValue: hc}]
    });
  });

  it('should be created', inject([TtSsService], (service: TtSsService) => {
    expect(service).toBeTruthy();
  }));
});

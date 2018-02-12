import { TestBed, inject } from '@angular/core/testing';

import { WebserviceCallService } from './webservice-call.service';

describe('WebserviceCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebserviceCallService]
    });
  });

  it('should be created', inject([WebserviceCallService], (service: WebserviceCallService) => {
    expect(service).toBeTruthy();
  }));
});

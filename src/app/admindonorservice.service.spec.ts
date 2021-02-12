import { TestBed } from '@angular/core/testing';

import { AdmindonorserviceService } from './admindonorservice.service';

describe('AdmindonorserviceService', () => {
  let service: AdmindonorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindonorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PaddyFieldsService } from './paddy-fields.service';

describe('PaddyFieldsService', () => {
  let service: PaddyFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaddyFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

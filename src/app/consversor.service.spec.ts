import { TestBed } from '@angular/core/testing';

import { ConsversorService } from './consversor.service';

describe('ConsversorService', () => {
  let service: ConsversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RespositoryService } from './respository.service';

describe('RespositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespositoryService = TestBed.get(RespositoryService);
    expect(service).toBeTruthy();
  });
});

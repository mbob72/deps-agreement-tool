import { TestBed } from '@angular/core/testing';

import { InputUpdateService } from './input-update.service';

describe('InputUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputUpdateService = TestBed.get(InputUpdateService);
    expect(service).toBeTruthy();
  });
});

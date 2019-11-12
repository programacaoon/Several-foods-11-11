import { TestBed } from '@angular/core/testing';

import { ServiceChinesaService } from './service-chinesa.service';

describe('ServiceChinesaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceChinesaService = TestBed.get(ServiceChinesaService);
    expect(service).toBeTruthy();
  });
});

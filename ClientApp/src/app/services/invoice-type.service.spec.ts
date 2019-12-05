import { TestBed } from '@angular/core/testing';

import { InvoiceTypeService } from './invoice-type.service';

describe('InvoiceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceTypeService = TestBed.get(InvoiceTypeService);
    expect(service).toBeTruthy();
  });
});

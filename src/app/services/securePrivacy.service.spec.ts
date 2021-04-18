/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecurePrivacyService } from './securePrivacy.service';

describe('Service: SecurePrivacy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurePrivacyService]
    });
  });

  it('should ...', inject([SecurePrivacyService], (service: SecurePrivacyService) => {
    expect(service).toBeTruthy();
  }));
});

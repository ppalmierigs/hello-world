import { TestBed } from '@angular/core/testing';

import { HelloWorldLinookiService } from './hello-world-linooki.service';

describe('HelloWorldLinookiService', () => {
  let service: HelloWorldLinookiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldLinookiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

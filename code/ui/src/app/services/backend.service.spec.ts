import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { BackendService } from './backend.service';
import { HttpParams } from '@angular/common/http';

describe('BackendService', () => {
  let service: BackendService;
  let httpMock: HttpTestingController;
  let injector;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [BackendService] });
    injector = getTestBed();
    service = TestBed.inject(BackendService);
    httpMock = injector.get(HttpTestingController);
  });

  
  describe('#getData', () => {
    const dummyParams = new HttpParams().set('q', 'richie');


    it('should return an Observable<any[]>', () => {
      service.getRecords(dummyParams)
        .subscribe(result => {
          expect(result.items.length).toBe(2);
        });

      const req = httpMock.expectOne(`${service.API_URL}/api/getData?q=richie`);
      expect(req.request.url).toBe(`${service.API_URL}/api/getData`);
      expect(req.request.params).toEqual(dummyParams);

      req.flush({
        incomplete_results: false,
        items: [{}, {}],
        total_count: 2
      });
    });
  });

});

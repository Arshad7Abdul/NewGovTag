import { InvoiceRegistrationData } from './../../models/InvoiceRegistrationData';
import { InvoiceData } from './../../models/InvoiceData';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, empty, throwError, of } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PendingApplicationsServiceService {

    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    }

    public getInvoiceData(): Observable<InvoiceData[]> {
        return this._http.get<InvoiceData[]>('./assets/InvoiceData.json');
      }

      public getRegistrationData(): Observable<InvoiceRegistrationData[]> {
        return this._http.get<InvoiceRegistrationData[]>('./assets/RegistrationData.json');
      }



    // getCityList() {
    //     return this._http.get(this.myAppUrl + 'api/PendingApplications/GetCityList')
    //         .pipe(
    //             //map((response: Response) => response.json())
    //             catchError(error => {
    //                 console.log(error);
    //                 return throwError(error);
    //             })
    //         );
    // }

    // getPendingApplications() {
    //     return this._http.get(this.myAppUrl + 'api/PendingApplications/Index')
    //         .pipe(
    //             //map((response: Response) => response.json())
    //             catchError(error => {
    //                 console.log(error);
    //                 return throwError(error);
    //             })
    //         );
    // }

    
}

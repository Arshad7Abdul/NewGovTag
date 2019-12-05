import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, empty, throwError, of } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PendingApplicationsServiceService {

    myAppUrl: string = "https://localhost:44349/";


    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        //this.myAppUrl = baseUrl;
    }

    getCityList() {
        return this._http.get(this.myAppUrl + 'api/PendingApplications/GetCityList')
            .pipe(
                //map((response: Response) => response.json())
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

    getPendingApplications() {
        return this._http.get(this.myAppUrl + 'api/PendingApplications/Index')
            .pipe(
                //map((response: Response) => response.json())
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

    getEmployeeById(id: number) {
        return this._http.get(this.myAppUrl + "api/Home/Details/" + id)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

    saveEmployee(employee) {
        return this._http.post(this.myAppUrl + 'api/Home/Create', employee)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

    updateEmployee(employee) {
        return this._http.put(this.myAppUrl + 'api/Home/Edit', employee)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

    deleteEmployee(id) {
        return this._http.delete(this.myAppUrl + "api/Home/Delete/" + id)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}

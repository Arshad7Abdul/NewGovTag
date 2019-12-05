import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tempForm } from '../models/tempForm';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FormServiceService {
    myAppUrl: string = "https://localhost:44349/";

    constructor(private http: HttpClient) { }

    submitData(tempForm: tempForm): Observable<boolean> {
        const body = JSON.stringify(tempForm);
        const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post<string>(this.myAppUrl + 'api/PendingApplications/CreateForm', body, {
            headers: headerOptions
        }).pipe(catchError(this.handleError.bind(this))
        )
    }





    handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }

        // return an observable with a meaningful error message to the end user
        return throwError('There is a problem with the service.We are notified & working on it.Please try again later.');

    }
}


    
    


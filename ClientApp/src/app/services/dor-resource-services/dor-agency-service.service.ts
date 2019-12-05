import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as globals from '../../globals';
import { Observable } from 'rxjs';
import { LutAgency } from 'src/app/models/LutAgency';
import { Agency } from 'src/app/models/Agency';



const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class DorAgencyServiceService {
    // public dorResourcesUrl = globals.dorResourcesApiUrl;
    // agencyTypes: LutAgency[] = null;

    // constructor(private http: HttpClient) { }

    // public getAgenciesList(): Observable<LutAgency[]> {
    //     return this.http.get<LutAgency[]>(
    //         this.dorResourcesUrl + 'api/Agency/'
            
    //     );
    // }
    
   constructor(private http: HttpClient) {
  
}

public getAgency(): Observable<Agency[]> {
    return this.http.get<Agency[]>("./assets/agency.json");
}

    
}

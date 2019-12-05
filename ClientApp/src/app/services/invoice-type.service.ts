import { HttpClient } from '@angular/common/http';
import { GovInvoiceType } from './../models/GovInvoiceType';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceTypeService {

  constructor(private http: HttpClient) { }

  public getInvoiceType(): Observable<GovInvoiceType[]> {
    return this.http.get<GovInvoiceType[]>('./assets/invoiceType.json');
  }
}

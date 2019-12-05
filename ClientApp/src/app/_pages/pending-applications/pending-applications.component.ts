import { InvoiceViewModel } from './../../models/invoice-viewmodel';
import { InvoiceData } from './../../models/InvoiceData';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PendingApplicationsServiceService } from '../../services/pendingApplications/pending-applications-service.service';
import { Module } from '@ag-grid-community/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { DorAgencyServiceService } from '../../services/dor-resource-services/dor-agency-service.service';

@Component({
  selector: 'app-pending-applications',
  templateUrl: './pending-applications.component.html',
  styleUrls: ['./pending-applications.component.css']
})
export class PendingApplicationsComponent implements OnInit {
    public appsList: InvoiceData[];

    public modules: Module[] = AllCommunityModules;
    gridOptions: {};
    columnDefs = [];
    rowData = [];
    constructor(public http: HttpClient, private _router: Router, private _pendingApplicationsService: PendingApplicationsServiceService,
        private _dorAgencyServiceService: DorAgencyServiceService,) {
        // this.getPendingApplications();

        this.columnDefs = [
            { headerName: 'Invoice Number', field: 'InvoiceNumber'},
            { headerName: 'Document Control Number', field: 'DocumentControlNumber' },
            { headerName: 'Agency Name', field: 'AgencyName' },
            { headerName: 'Processor Name', field: 'Processor' },
            { headerName: 'Status', field: 'Status' },
            { headerName: 'Action', field: 'Action' }
        ];
    }

    ngOnInit(): void {
        this.gridOptions = {
            defaultColDef: {
                filter: true,
                sortable: true,
                resizable: true
            },
            columnDefs: this.columnDefs,
            pagination: true,
            paginationPageSize : 100,
            onGridReady: params => {
                this._pendingApplicationsService.getInvoiceData().subscribe(invoiceData => {
                    this._dorAgencyServiceService.getAgency().subscribe(agencyData => {
                        invoiceData.forEach(element => {
                            const invoiceViewModel = new InvoiceViewModel();
                            invoiceViewModel.InvoiceNumber = element.InvoiceID;
                            invoiceViewModel.DocumentControlNumber = element.ControlNumber;
                            invoiceViewModel.AgencyName = '';
                            invoiceViewModel.Processor = element.UpdatedBy;
                            invoiceViewModel.Status = '';
                            invoiceViewModel.Action = '';

                            const agency = agencyData.find(x => x.AgencyID === element.AgencyID);
                            if (agency !== undefined) {
                                agency.AgencyName = invoiceViewModel.AgencyName;
                            }
                            // const invoiceType = invoiceData.find(x => x.InvoiceTypeID === element.ApplicationTypeID);
                            // if (invoiceType !== undefined) {
                            //     agencyViewModel.InvoiceDescription = invoiceType.Description;
                            //     agencyViewModel.ApplicationType = invoiceType.InvoiceTypeValue;
                            // }
                            this.rowData.push(invoiceViewModel);

                        });
                        params.api.setRowData(this.rowData);
                    });
                });





            }
        };
    }


    getPendingApplications() {
        this._pendingApplicationsService.getInvoiceData().subscribe(
            data => {
                this.appsList = data;
                console.log('data', data);
            });
        console.log(this.appsList);
    }

}



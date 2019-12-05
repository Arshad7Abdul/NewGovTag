import { InvoiceTypeService } from './../../services/invoice-type.service';
import { Component, OnInit } from '@angular/core';
import { Agency } from '../../models/Agency';
import { HttpClient } from '@angular/common/http';
import { DorAgencyServiceService } from '../../services/dor-resource-services/dor-agency-service.service';
import { DataViewModule } from 'primeng/dataview';
import { SelectItem } from 'primeng/api/selectitem';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';
import { AgencyViewModel } from '../../models/AgencyViewModel';

@Component({
    selector: 'app-all-agencies-list',
    templateUrl: './all-agencies-list.component.html',
    styleUrls: ['./all-agencies-list.component.css']
})
export class AllAgenciesListComponent implements OnInit {
    public modules: Module[] = AllCommunityModules;
    gridOptions: {};
    columnDefs = [];
    rowData = [];
    constructor(public http: HttpClient, private _dorAgencyServiceService: DorAgencyServiceService,
        private invoiceTypeService: InvoiceTypeService) {
        this.columnDefs = [
            { headerName: 'Agency ID', field: 'AgencyID', filter: 'agNumberColumnFilter' },
            { headerName: 'Agency Number', field: 'AgencyNumber' },
            { headerName: 'Agency Name', field: 'AgencyName' },
            { headerName: 'Description Name', field: 'InvoiceDescription' },
            { headerName: 'Application Type', field: 'ApplicationType' },
            { headerName: 'City', field: 'City' }
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

                this._dorAgencyServiceService.getAgency().subscribe(data => {
                    this.invoiceTypeService.getInvoiceType().subscribe(invoiceData => {
                        data.forEach(element => {
                            const agencyViewModel = new AgencyViewModel();
                            agencyViewModel.AgencyID = element.AgencyID;
                            agencyViewModel.AgencyName = element.AgencyName;
                            agencyViewModel.AgencyNumber = element.AgencyNumber;
                            agencyViewModel.City = '';
                            agencyViewModel.ApplicationType = '';
                            agencyViewModel.InvoiceDescription = '';
                            const address = element['AgencyAddresses'].find(x => x.AgencyID === element.AgencyID);
                            if (address !== undefined) {
                                agencyViewModel.City = address.City;
                            }
                            const invoiceType = invoiceData.find(x => x.InvoiceTypeID === element.ApplicationTypeID);
                            if (invoiceType !== undefined) {
                                agencyViewModel.InvoiceDescription = invoiceType.Description;
                                agencyViewModel.ApplicationType = invoiceType.InvoiceTypeValue;
                            }
                            this.rowData.push(agencyViewModel);

                        });
                        params.api.setRowData(this.rowData);
                    });
                });

            }

        };


    }

}

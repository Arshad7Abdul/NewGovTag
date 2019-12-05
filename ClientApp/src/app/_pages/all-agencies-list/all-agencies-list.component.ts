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
    // public agencyList: Agency[];

    // sortOptions: SelectItem[];

    // sortKey: string;

    // sortField: string;

    // sortOrder: number;
    gridOptions: {};

    public modules: Module[] = AllCommunityModules;
    columnDefs = [];
    rowData = [];
    constructor(public http: HttpClient, private _dorAgencyServiceService: DorAgencyServiceService) {
        // this.getAgenciesList();
        this.columnDefs = [
            { headerName: 'Agency ID', field: 'AgencyID', sortable: true },
            { headerName: 'Agency Number', field: 'AgencyNumber', sortable: true },
            { headerName: 'Agency Name', field: 'AgencyName', sortable: true },
            { headerName: 'Description Name', field: 'Description', sortable: true }
        ];
        // this.rowData = [{ AgencyID: 1, AgencyNumber: '0290', AgencyName: 'CITY OF HANCEVILLE /WATERWORKS&SEWER B' },
        // { AgencyID: 2, AgencyNumber: '1166', AgencyName: 'USS ALABAMA BATTLESHIP COMMISSION' },
        // { AgencyID: 3, AgencyNumber: '1166', AgencyName: 'USS ALABAMA BATTLESHIP COMMISSION' }];

    }

    ngOnInit(): void {
        this.gridOptions = {
            defaultColDef: {
                resizable: true
            },
            columnDefs: this.columnDefs,
            pagination: true,
            onGridReady: params => {

                this._dorAgencyServiceService.getAgency().subscribe(data => {
                    debugger;
        
                    data.forEach(element => {
                     const agencyViewModel  = new AgencyViewModel();
                     agencyViewModel.AgencyID =  element.AgencyID;
                     agencyViewModel.AgencyName = element.AgencyName;
                     agencyViewModel.AgencyNumber = element.AgencyNumber;
                     const address = element['AgencyAddresses'].find(x => x.AgencyID === '45');
                    //  agencyViewModel.City
                    //  agencyViewModel.Description = element.ApplicationTypeID;
                        this.rowData.push(agencyViewModel);

                    });
                    params.api.setRowData(this.rowData);
                    // this.rowData = [{ AgencyID: 1, AgencyNumber: '0290', AgencyName: 'CITY OF HANCEVILLE /WATERWORKS&SEWER B' },
                    // { AgencyID: 2, AgencyNumber: '1166', AgencyName: 'USS ALABAMA BATTLESHIP COMMISSION' },
                    // { AgencyID: 3, AgencyNumber: '1166', AgencyName: 'USS ALABAMA BATTLESHIP COMMISSION' }];
                    // this.agencyList = data;
        
                    console.log(data);
                });

            },
            rowData: this.rowData,

        };

      
    }

}

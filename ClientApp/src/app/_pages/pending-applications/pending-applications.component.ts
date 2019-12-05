import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PendingApplicationsServiceService } from '../../services/pendingApplications/pending-applications-service.service';

@Component({
  selector: 'app-pending-applications',
  templateUrl: './pending-applications.component.html',
  styleUrls: ['./pending-applications.component.css']
})
export class PendingApplicationsComponent {
    public appsList: any;

    constructor(public http: HttpClient, private _router: Router, private _pendingApplicationsService: PendingApplicationsServiceService) {
        this.getPendingApplications();
    }

    getPendingApplications() {
        this._pendingApplicationsService.getPendingApplications().subscribe(
            data => {
                this.appsList = data;
                console.log('data', data);

            });
        console.log(this.appsList);
    }

}



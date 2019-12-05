import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DorAgencyServiceService } from 'src/app/services/dor-resource-services/dor-agency-service.service';

@Component({
  selector: 'app-view-agency',
  templateUrl: './view-agency.component.html',
  styleUrls: ['./view-agency.component.css']
})
export class ViewAgencyComponent implements OnInit {
  public agencyList: any;
  constructor(private router: Router, private _dorAgencyServiceService: DorAgencyServiceService) { }

  ngOnInit() {
  //   this._dorAgencyServiceService.getJSON().subscribe(data => {
  //     this.agencyList = data;
  //      console.log(data);
  //  });
  }

  navigate(agencyId: number){
     this.router.navigate(['/agencies-list'], {queryParams:  {agencyid : agencyId}});
  }

}

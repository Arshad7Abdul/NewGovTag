import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LandingComponent } from "./_pages/landing/landing.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { PendingApplicationsComponent } from "./_pages/pending-applications/pending-applications.component";
import { CreateApplicationComponent } from "./_pages/create-application/create-application.component";
import { AllAgenciesListComponent } from "./_pages/all-agencies-list/all-agencies-list.component";
import { ViewAgencyComponent } from "./_pages/view-agency/view-agency.component";

const appRoutes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'pending-apps', component: PendingApplicationsComponent },
      { path: 'create-app', component: CreateApplicationComponent },
      { path: 'agencies-list', component: AllAgenciesListComponent },
      { path: 'view-agency', component: ViewAgencyComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
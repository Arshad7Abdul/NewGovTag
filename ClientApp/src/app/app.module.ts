import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateApplicationComponent } from './_pages/create-application/create-application.component';
import { SearchApplicationsComponent } from './_pages/search-applications/search-applications.component';
import { PendingApplicationsComponent } from './_pages/pending-applications/pending-applications.component';
import { AllAgenciesListComponent } from './_pages/all-agencies-list/all-agencies-list.component';
import { TextBoxComponent } from './shared/_components/text-box/text-box.component';
import { LandingComponent } from './_pages/landing/landing.component';
import { ViewAgencyComponent } from './_pages/view-agency/view-agency.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CreateApplicationComponent,
    SearchApplicationsComponent,
    PendingApplicationsComponent,
    AllAgenciesListComponent,
    TextBoxComponent,
    LandingComponent,
    ViewAgencyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      DataViewModule,
      AgGridModule.withComponents(
        [
          AllAgenciesListComponent
        ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

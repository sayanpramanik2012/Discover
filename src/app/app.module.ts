import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataSummaryComponent } from './data-summary/data-summary.component';

import { ReportPageComponent } from './report-page/report-page.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrandBarComponent } from './brand-bar/brand-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DataSummaryComponent,
    ReportPageComponent,
    AddButtonComponent,
    FooterComponent,
    BrandBarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

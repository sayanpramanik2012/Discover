import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSelectorPageComponent } from './data-selector-page/data-selector-page.component';
import { FormsModule } from '@angular/forms';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { FooterComponent } from './footer/footer.component';
import { BrandBarComponent } from './brand-bar/brand-bar.component';
import { GridTableComponent } from './grid-table/grid-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    DataSelectorPageComponent,
    DataSummaryComponent,
    ReportPageComponent,
    AddButtonComponent,
    FooterComponent,
    BrandBarComponent,
    GridTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule ,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

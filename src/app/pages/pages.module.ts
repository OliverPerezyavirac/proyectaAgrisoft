import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PestReportComponent } from './pest-report/pest-report.component';



@NgModule({
    declarations: [
        HomeComponent,
        PestReportComponent,
        ReportComponent,
    ],
    exports: [
        HomeComponent,
        PestReportComponent,
        ReportComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        StaticModule
    ]
})
export class PagesModule { }

import { CommonModule } from '@angular/common';

import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PestReportComponent } from './pest-report/pest-report.component';
import { StaticModule } from '../static/static.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

    {path: 'home', component: HomeComponent, children:[
        {path:'pest-report', component: PestReportComponent},
        {path:'report', component: ReportComponent},
    ]},
    { path: 'dashboard', component: DashboardComponent }

]

@NgModule({
    imports: [CommonModule,StaticModule ,RouterModule.forChild(routes)],
   
})

export class PagesRoutingModule {};
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PestReportComponent } from './pest-report/pest-report.component';

const routes: Routes = [

    {path: 'home', component: HomeComponent, children:[
        {path:'pest-report', component: PestReportComponent},
        {path:'report', component: ReportComponent},
    ]},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {};
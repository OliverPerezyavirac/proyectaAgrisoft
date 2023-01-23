import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user/userRouting.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from "./pages/pagesRouting.module";

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    // {path: '**', redirectTo: '/notfound', pathMatch:'full'}

]

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes),PagesRoutingModule, UserRoutingModule],
    exports: [RouterModule]
})

export class RoutingModule {};
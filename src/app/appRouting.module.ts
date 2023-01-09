import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from "./pages/pagesRouting.module";

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},

]

@NgModule({
    imports: [RouterModule.forRoot(routes),PagesRoutingModule],
    exports: [RouterModule]
})

export class RoutingModule {};
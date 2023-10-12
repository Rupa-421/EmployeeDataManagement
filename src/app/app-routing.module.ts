import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { NgModule } from "@angular/core";
import { EmployeeAddComponent } from "./Components/employee-add/employee-add.component";

const routes:Routes=[
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path:'home', component:HomeComponent},
    { path:'add',component:EmployeeAddComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
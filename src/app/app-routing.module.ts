import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { NgModule } from "@angular/core";
import { EmployeeAddComponent } from "./Components/employee-add/employee-add.component";
import { EmployeeUpdateComponent } from "./Components/employee-update/employee-update.component";

const routes:Routes=[
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path:'home', component:HomeComponent},
    { path:'add',component:EmployeeAddComponent},
    { path:'update',component:EmployeeUpdateComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
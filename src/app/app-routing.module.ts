import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllocationComponent } from "./allocation/allocation.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ProjectComponent } from "./project/project.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    {path: '', redirectTo: "/allocation", pathMatch: "full"},
    {path: 'allocation', component: AllocationComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: 'user', component: UserComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
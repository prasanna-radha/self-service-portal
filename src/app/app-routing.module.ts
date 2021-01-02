import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllocationComponent } from "./allocation/allocation.component";

const routes: Routes = [
    {path: '', component: AllocationComponent},
    {path: 'allocation', component: AllocationComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {ArchiveComponent} from "../../pages/archive/archive.component";
import { SalleComponent } from 'src/app/pages/salle/salle.component';
import { BoitierComponent } from 'src/app/pages/boitier/boitier.component';
import { RaionageComponent } from 'src/app/pages/raionage/raionage.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'archive', component: ArchiveComponent},
    {path: 'boitier', component: BoitierComponent},
  {path: 'salle', component: SalleComponent},
  {path: 'raionage', component: RaionageComponent},
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainLayoutRoutingModule { }

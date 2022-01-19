import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragdropComponent } from './components/dragdrop/dragdrop/dragdrop.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
    children:[
      {
        path:'',
        component:DashboardComponent
     },
     {
      path:'drag',
      component:DragdropComponent
   },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }

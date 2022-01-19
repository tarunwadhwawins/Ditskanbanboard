import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UiComponentModule } from '../ui-component/ui-component.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragdropComponent } from './components/dragdrop/dragdrop/dragdrop.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DragdropComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    UiComponentModule,
    DragDropModule
  ]
})
export class FeatureModule { }

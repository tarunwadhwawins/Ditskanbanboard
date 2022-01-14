import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UiComponentModule } from '../ui-component/ui-component.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    UiComponentModule
  ]
})
export class FeatureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentRoutingModule } from './ui-component-routing.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentRoutingModule,
    NzDropDownModule
  ],
  exports: [
    NzDropDownModule
  ]
})
export class UiComponentModule { }

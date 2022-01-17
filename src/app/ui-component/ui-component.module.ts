import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentRoutingModule } from './ui-component-routing.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentRoutingModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule
  ],
  exports: [
    NzDropDownModule,
    NzIconModule,
    NzInputModule
  ]
})
export class UiComponentModule { }

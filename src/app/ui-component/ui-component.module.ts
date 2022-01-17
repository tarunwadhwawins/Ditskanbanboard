import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentRoutingModule } from './ui-component-routing.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentRoutingModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzAvatarModule,
    NzTimelineModule
  ],
  exports: [
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzAvatarModule,
    NzTimelineModule
  ]
})
export class UiComponentModule { }

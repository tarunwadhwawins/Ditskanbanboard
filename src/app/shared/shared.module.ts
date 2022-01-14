import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UiComponentModule } from '../ui-component/ui-component.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    UiComponentModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    SideNavComponent,
    UiComponentModule
  ]
})
export class SharedModule { }

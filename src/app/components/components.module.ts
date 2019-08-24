import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { SelectorPage } from './../selector/selector.page';

@NgModule({
  declarations: [
    HeaderComponent,
    SelectorPage
  ],

  entryComponents: [
      SelectorPage
  ],

  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ]
})
export class ComponentsModule { }

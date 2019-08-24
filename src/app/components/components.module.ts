import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { SelectorPage } from './../selector/selector.page';

/*
  Remove comments to see the modal (header component) work on ionic serve --lab or emulator.
  But it doesnt build the apk.   
*/
@NgModule({
  declarations: [
    HeaderComponent//,
//    SelectorPage
  ],
/*
  entryComponents: [
      SelectorPage
  ],
*/
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

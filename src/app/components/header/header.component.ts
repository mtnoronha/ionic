import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { ModalController } from '@ionic/angular';
import { SelectorPage } from './../../selector/selector.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  @Input('title') title;
  
  constructor(public router:Router, public modalCtrl:ModalController) { }

  ngOnInit() {}

  logOut(){
    this.router.navigateByUrl('/login')      
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SelectorPage,
      cssClass: 'selector-modal'
    });
    return await modal.present();
  }  

}

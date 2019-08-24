import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.page.html',
  styleUrls: ['./selector.page.scss'],
})
export class SelectorPage implements OnInit {

  data

  constructor(public modalCtrl:ModalController) { 
    this.data = [
      { 
        name: "Student One",
        foo: [ 
          {
            id: 1,
            description: "Class One"
          },
          {
            id: 2,
            description: "Class Two"
          }          
        ]
      },
      { 
        name: "Student Two",
        foo: [ 
          {
            id: 3,
            description: "Class Three"
          },
          {
            id: 4,
            description: "Class Four"
          }          
        ]
      }
    ]
  }

  ngOnInit() {
  }

  async dismissModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  selected(){
    this.dismissModal()
  }


}

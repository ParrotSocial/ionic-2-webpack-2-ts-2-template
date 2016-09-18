import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: require('./home.html')
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
}

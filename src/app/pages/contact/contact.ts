import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: require('./contact.html')
})
export class ContactPage {
  constructor(public navCtrl: NavController) {
  }
}

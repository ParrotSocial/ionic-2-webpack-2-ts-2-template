import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: require('./about.html')
})
export class AboutPage {
  constructor(public navCtrl: NavController) {
  }
}

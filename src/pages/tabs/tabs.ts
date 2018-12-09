//<!--name: Hyeju Lee, student number: 1801714-->
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  cvRoot: any = 'CvPage';
  activitiesRoot: any = 'ActivitiesPage';
  //projectRoot: any = 'ProjectPage';// I don't need this page anymore
  profileRoot: any = 'ProfilePage';// added personal profile page
  contactRoot: any = 'ContactPage';
  technicalskillsRoot: any = 'TechnicalskillsPage';
  softskillsRoot: any = 'SoftskillsPage';
  personalprojectRoot: any = 'PersonalprojectPage';
  teamprojectRoot: any = 'TeampProjectPage';
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}

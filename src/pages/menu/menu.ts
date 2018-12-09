//<!--name: Hyeju Lee, student number: 1801714-->
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';//importing pages that I made
import { CvPage } from './../cv/cv';//importing pages that I made
import { ActivitiesPage } from './../activities/activities';//importing pages that I made
import { ProjectPage } from './../project/project';//importing pages that I made
import { ContactPage } from './../contact/contact';//importing pages that I made
import { TechnicalSkillsPage } from './../technical-skills/technical-skills';//importing pages that I made
import { SoftSkillsPage } from './../soft-skills/soft-skills';//importing pages that I made
import { PersonalProjectPage } from './../personal-project/personal-project';//importing pages that I made
import { TeamProjectPage } from './../team-project/team-project';//importing pages that I made

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}//interface added

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'CV', pageName: 'CvPage', tabComponent: 'CvPage', index: 0, icon: 'home' },
    { title: 'Profile', pageName: 'ProfilePage', tabComponent: 'ProfilePage', index: 1, icon: 'hand' },
    { title: 'Activities', pageName: 'ActivitiesPage', tabComponent: 'ActivitiesPage', index: 2, icon: 'images' },
    { title: 'Contact', pageName: 'ContactPage', tabComponent: 'ContactPage', index: 3, icon: 'contacts' },
    { title: 'TechnialSkills', pageName: 'TechnicalSkillsPage', tabComponent: 'TechnicalskillsPage', index: 4, icon: 'flower' },
    { title: 'SoftSkills', pageName: 'SoftSkillsPage', tabComponent: 'SoftskillsPage', index: 5, icon: 'happy' },
    { title: 'PersonalProject', pageName: 'PersonalProjectPage', tabComponent: 'PersonalprojectPage', index: 6, icon: 'contact' },
    { title: 'TeamProject', pageName: 'TeamProjectPage', tabComponent: 'TeamprojectPage', index: 7, icon: 'chatboxes' },
    
  ];
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}
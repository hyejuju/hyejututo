import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftSkillsPage } from './soft-skills';

@NgModule({
  declarations: [
    SoftSkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoftSkillsPage),
  ],
})
export class SoftSkillsPageModule {}

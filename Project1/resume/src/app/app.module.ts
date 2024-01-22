import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcometopComponent } from './welcometop/welcometop.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { InfopairComponent } from './infopair/infopair.component';
import { SkillpairComponent } from './skillpair/skillpair.component';
import { EducationlistComponent } from './educationlist/educationlist.component';
import { EducationComponent } from './education/education.component';
import { ExperiencelistComponent } from './experiencelist/experiencelist.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcometopComponent,
    AboutComponent,
    SkillsComponent,
    InfopairComponent,
    SkillpairComponent,
    EducationlistComponent,
    EducationComponent,
    ExperiencelistComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

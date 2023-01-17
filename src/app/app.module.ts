import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'flowbite';

import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ShowcasesComponent } from './components/showcases/showcases.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { EducationsComponent } from './components/educations/educations.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ExperiencesComponent,
    ShowcasesComponent,
    TechnicalSkillsComponent,
    EducationsComponent,
    LanguagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

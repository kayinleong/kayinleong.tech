import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ExperiencesComponent } from 'src/app/components/experiences/experiences.component';
import { TechnicalSkillsComponent } from 'src/app/components/technical-skills/technical-skills.component';
import { EducationsComponent } from 'src/app/components/educations/educations.component';
import { LanguagesComponent } from 'src/app/components/languages/languages.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    ExperiencesComponent,
    TechnicalSkillsComponent,
    EducationsComponent,
    LanguagesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcasesRoutingModule } from './showcases-routing.module';
import { ShowcasesComponent as ShowcasesComponentHome } from './showcases.component';
import { ShowcasesComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [ShowcasesComponentHome, ShowcasesComponent],
  imports: [CommonModule, ShowcasesRoutingModule],
})
export class ShowcasesModule {}

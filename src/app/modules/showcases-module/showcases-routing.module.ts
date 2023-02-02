import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowcasesComponent as ShowcasesComponentHome } from './showcases.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcasesComponentHome,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcasesRoutingModule {}

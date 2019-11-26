import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaListComponent } from './components/persona-list/persona-list.component';
import {PersonaFormComponent} from './components/persona-form/persona-form.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/personas',
    pathMatch: 'full',
  },
  {
    path:'personas',
    component: PersonaListComponent
  },
  {
    path:'personas/add',
    component: PersonaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

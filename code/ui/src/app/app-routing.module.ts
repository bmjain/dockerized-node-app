import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autocomplete',
    pathMatch: 'full'
  },
  {
    path: 'autocomplete', component: AutocompleteComponent
  },
  {
    path: '**' , redirectTo: 'autocomplete'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

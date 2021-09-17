import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InformationPageComponent } from './information-page/information-page.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: HomePageComponent
  },
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },  // Wildcard route for a 404 page

  // {
  //   path: 'information/:id',
  //   component: InformationPageComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'buscador', component: SearchComponent},
  {path: '', pathMatch:'full', redirectTo:'inicio'},
  {path: '**', pathMatch:'full', redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ArtistaComponent } from './pages/artista/artista.component';



export const routes:Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }


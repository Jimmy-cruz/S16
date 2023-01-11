import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ChileComponent } from './pages/pantallas/chile/chile.component';
import { PeruComponent } from './pages/pantallas/peru/peru.component';
import { UruguayComponent } from './pages/pantallas/uruguay/uruguay.component';

const routes: Routes = [
  // se establece las rutas para navegacion de componentes
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'peru', component:PeruComponent},
  {path:'chile', component:ChileComponent},
  {path:'uruguay', component:UruguayComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

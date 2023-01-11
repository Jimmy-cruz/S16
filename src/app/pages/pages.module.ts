import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { PeruComponent } from './pantallas/peru/peru.component';
import { ChileComponent } from './pantallas/chile/chile.component';
import { UruguayComponent } from './pantallas/uruguay/uruguay.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
    
  ]
})
export class PagesModule { }

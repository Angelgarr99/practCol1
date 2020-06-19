import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { saludarComponent } from './componentes/saludar/saludar.component';
import { FormAppComponent } from './componentes/form-app/form-app.component';
import { AddAppComponent } from './componentes/add-app/add-app.component';

const routes: Routes = [
{path:'inicio', component: HomeComponent},
{path:'Saludo', component: saludarComponent},
{path:'formulario', component: FormAppComponent},
{path:'agregar', component: AddAppComponent},
{path:'**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

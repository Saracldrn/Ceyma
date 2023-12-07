import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { TechosComponent } from './techos/techos.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { EscayolasComponent } from './escayolas/escayolas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'techos', component: TechosComponent },
  { path: 'materiales', component: MaterialesComponent },
  { path: 'escayolas', component: EscayolasComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
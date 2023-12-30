import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { EscayolasComponent } from './escayolas/escayolas.component';
import { TechosComponent } from './techos/techos.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TellamamosComponent } from './tellamamos/tellamamos.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    EscayolasComponent,
    TechosComponent,
    MaterialesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TellamamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

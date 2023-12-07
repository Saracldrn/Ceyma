import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { EscayolasComponent } from './escayolas/escayolas.component';
import { TechosComponent } from './techos/techos.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    EscayolasComponent,
    TechosComponent,
    MaterialesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

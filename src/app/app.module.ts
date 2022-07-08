
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MaterialModule} from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { EscalaComponent } from './components/escala/escala.component';
import { CategoriaCriarEscalaComponent } from './components/categoria-criar-escala/categoria-criar-escala.component';
import { ConsultarCoroinhaComponent } from './components/consultar-coroinha/consultar-coroinha.component';
import { CriarCoroinhaComponent } from './components/criar-coroinha/criar-coroinha.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { ConsultarUsuarioComponent } from './components/consultar-usuario/consultar-usuario.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    EscalaComponent,
    CategoriaCriarEscalaComponent,
    ConsultarCoroinhaComponent,
    CriarCoroinhaComponent,
    CadastroComponent,
    CadastrarUsuarioComponent,
    ConsultarUsuarioComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

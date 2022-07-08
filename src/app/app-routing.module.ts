import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCoroinhaComponent } from './components/consultar-coroinha/consultar-coroinha.component';
import { EscalaComponent } from './components/escala/escala.component';
import { CategoriaCriarEscalaComponent } from './components/categoria-criar-escala/categoria-criar-escala.component';
import { CategoriaConsultarEscalaComponent } from './components/categoria-consultar-escala/categoria-consultar-escala.component';
import { CriarCoroinhaComponent } from './components/criar-coroinha/criar-coroinha.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { ConsultarUsuarioComponent } from './components/consultar-usuario/consultar-usuario.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'escala',component:EscalaComponent},
  {path:'categoria-criar-escala',component: CategoriaCriarEscalaComponent},
  {path:'categoria-consultar-escala',component: CategoriaConsultarEscalaComponent},
  {path:'criar-coroinha',component:CriarCoroinhaComponent},
  {path:'criar-coroinha/:id',component:CriarCoroinhaComponent},
  {path:'consultar-coroinha',component:ConsultarCoroinhaComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'cadastrar-usuario',component:CadastrarUsuarioComponent},
  {path:'consultar-usuario',component:ConsultarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

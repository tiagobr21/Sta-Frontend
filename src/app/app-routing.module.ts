import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCoroinhaComponent } from './components/consultar-coroinha/consultar-coroinha.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { EscalaComponent } from './components/escala/escala.component';
import { CategoriaCriarEscalaComponent } from './components/categoria-criar-escala/categoria-criar-escala.component';
import { CategoriaConsultarEscalaComponent } from './components/categoria-consultar-escala/categoria-consultar-escala.component';
import { CriarCoroinhaComponent } from './components/criar-coroinha/criar-coroinha.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'escala',component:EscalaComponent},
  {path:'categoria-criar-escala',component: CategoriaCriarEscalaComponent},
  {path:'categoria-consultar-escala',component: CategoriaConsultarEscalaComponent},
  {path:'criar-coroinha',component:CriarCoroinhaComponent},
  {path:'criar-coroinha/:id',component:CriarCoroinhaComponent},
  {path:'consultar-coroinha',component:ConsultarCoroinhaComponent},
  {path:'pessoas',component:PessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

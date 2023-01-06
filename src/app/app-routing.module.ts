import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCoroinhaComponent } from './components/consultar-coroinha/consultar-coroinha.component';
import { CategoriaCriarEscalaComponent } from './components/categoria-criar-escala/categoria-criar-escala.component';
import { CriarCoroinhaComponent } from './components/criar-coroinha/criar-coroinha.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryConsultarEscalaComponent } from './components/category-consultar-escala/category-consultar-escala.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterGuardService } from './services/router-guard.service';
import { UsuariosComponent } from './components/funcoes-admin/usuarios/usuarios.component';


const routes: Routes = [

  {
   path:'',
   redirectTo:'login',
   pathMatch:'full',
  },{
    path:'',
   loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
   canActivate:[RouterGuardService],
   data:{
    expectedRole:['admin','user']
   }
  },
  
  {path:'home',component:HomeComponent,
    loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
    canActivate:[RouterGuardService],
    data:{
    expectedRole:['admin','user']  
    }
  },
  {path:'categoria-criar-escala',component: CategoriaCriarEscalaComponent},
  {path:'criar-coroinha',component:CriarCoroinhaComponent},
  {path:'criar-coroinha/:id',component:CriarCoroinhaComponent},
  {path:'consultar-coroinha',component:ConsultarCoroinhaComponent},
  {path:'category-consultar',component:CategoryConsultarEscalaComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/usuarios',component:UsuariosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

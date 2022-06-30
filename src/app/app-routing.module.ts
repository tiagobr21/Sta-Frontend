import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { CriarEscalaComponent} from './components/criar-escala/criar-escala.component'
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaEscalaComponent } from './consulta-escala/consulta-escala.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'criar-escala',component:CriarEscalaComponent},
  {path:'criar-escala/:id',component:CriarEscalaComponent},
  {path:'consulta-escala',component:ConsultaEscalaComponent},
  {path:'pessoas',component:PessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

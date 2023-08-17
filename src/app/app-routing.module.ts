import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCoroinhaComponent } from './components/consultar-escala/coroinha/consultar-coroinha/consultar-coroinha.component';
import { CategoriaCriarEscalaComponent } from './components/categoria-criar-escala/categoria-criar-escala.component';
import { CriarCoroinhaComponent } from './components/criar-escala/coroinha/criar-coroinha/criar-coroinha.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryConsultarEscalaComponent } from './components/category-consultar-escala/category-consultar-escala.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterGuardService } from './services/router-guard.service';
import { UsuariosComponent } from './components/funcoes-admin/usuarios/usuarios.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PermissoesComponent } from './components/funcoes-admin/usuarios/permissoes/permissoes.component';
import { EscalaCoroinhaPdfComponent } from './components/arquivos-pdf/escala-coroinha-pdf/escala-coroinha-pdf.component';
import { CriarMinistroComponent } from './components/criar-escala/ministro/criar-ministro/criar-ministro.component';
import { ConsultarMinistroComponent } from './components/consultar-escala/ministro/consultar-ministro/consultar-ministro.component';
import { EscalaMinistroPdfComponent } from './components/arquivos-pdf/escala-ministro-pdf/escala-ministro-pdf.component';
import { CriarCelebranteComponent } from './components/criar-escala/celebrante/criar-celebrante/criar-celebrante.component';
import { ConsultaCelebranteComponent } from './components/consultar-escala/celebrante/consulta-celebrante/consulta-celebrante.component';
import { EscalaCelebrantePdfComponent } from './components/arquivos-pdf/escala-celebrante-pdf/escala-celebrante-pdf.component';
import { CriarLiturgiaComponent } from './components/criar-escala/liturgia/criar-liturgia/criar-liturgia.component';
import { ConsultarLiturgiaComponent } from './components/consultar-escala/liturgia/consultar-liturgia/consultar-liturgia.component';
import { EscalaLiturgiaPdfComponent } from './components/arquivos-pdf/escala-liturgia-pdf/escala-liturgia-pdf.component';
import { EscalaGeralPdfComponent } from './components/arquivos-pdf/escala-geral-pdf/escala-geral-pdf.component';
import { EscalaGeralComponent } from './components/consultar-escala/geral/escala-geral/escala-geral.component';
import { HomeInicialComponent } from './components/pagina-inicial/home-inicial/home-inicial.component';
import { ConfigHomePageComponent } from './components/funcoes-admin/home-page/config-home-page/config-home-page.component';
import { ColaboracaoComponent } from './components/colaboracao/colaboracao.component';
import { DizimoComponent } from './components/colaboracao/dizimo/dizimo.component';
import { OfertaComponent } from './components/colaboracao/oferta/oferta.component';
import { DoacoesComponent } from './components/colaboracao/doacoes/doacoes.component';
import { SantaTeresinhaComponent } from './components/colaboracao/qrcodes/dizimo/santa-teresinha/santa-teresinha.component';
import { NsRosarioComponent } from './components/colaboracao/qrcodes/dizimo/ns-rosario/ns-rosario.component';
import { NsPerpetuoSocorroComponent } from './components/colaboracao/qrcodes/dizimo/ns-perpetuo-socorro/ns-perpetuo-socorro.component';
import { SaoPedroComponent } from './components/colaboracao/qrcodes/dizimo/sao-pedro/sao-pedro.component';
import { ScJesusComponent } from './components/colaboracao/qrcodes/dizimo/sc-jesus/sc-jesus.component';
import { SantaTeresinhaOfertasComponent } from './components/colaboracao/qrcodes/ofertas/santa-teresinha-ofertas/santa-teresinha-ofertas.component';
import { NsRosarioOfertasComponent } from './components/colaboracao/qrcodes/ofertas/ns-rosario-ofertas/ns-rosario-ofertas.component';
import { NsPerpetuoSocorroOfertasComponent } from './components/colaboracao/qrcodes/ofertas/ns-perpetuo-socorro-ofertas/ns-perpetuo-socorro-ofertas.component';
import { SaoPedroOfertasComponent } from './components/colaboracao/qrcodes/ofertas/sao-pedro-ofertas/sao-pedro-ofertas.component';
import { ScJesusOfertasComponent } from './components/colaboracao/qrcodes/ofertas/sc-jesus-ofertas/sc-jesus-ofertas.component';
import { SantaTeresinhaDoacoesComponent } from './components/colaboracao/qrcodes/doacoes/santa-teresinha-doacoes/santa-teresinha-doacoes.component';
import { NsRosarioDoacoesComponent } from './components/colaboracao/qrcodes/doacoes/ns-rosario-doacoes/ns-rosario-doacoes.component';
import { NsPerpetuoSocorroDoacoesComponent } from './components/colaboracao/qrcodes/doacoes/ns-perpetuo-socorro-doacoes/ns-perpetuo-socorro-doacoes.component';
import { SaoPedroDoacoesComponent } from './components/colaboracao/qrcodes/doacoes/sao-pedro-doacoes/sao-pedro-doacoes.component';
import { ScJesusDoacoesComponent } from './components/colaboracao/qrcodes/doacoes/sc-jesus-doacoes/sc-jesus-doacoes.component';


const routes: Routes = [  
  {
   path:'',
   redirectTo:'home-page',
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
  {path:'criar-escala-coroinha',component:CriarCoroinhaComponent,
    loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
    canActivate:[RouterGuardService],
    data:{
    expectedRole:['admin']  
  }
  },
  {path:'criar-escala-ministro',component:CriarMinistroComponent,
  loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
  canActivate:[RouterGuardService],
  data:{
  expectedRole:['admin']  
}
},
{path:'criar-escala-celebrante',component:CriarCelebranteComponent,
  loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
  canActivate:[RouterGuardService],
  data:{
  expectedRole:['admin']  
}
},
{path:'criar-escala-liturgia',component:CriarLiturgiaComponent,
  loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
  canActivate:[RouterGuardService],
  data:{
  expectedRole:['admin']  
}
},
  {path:'colaboracao/dizimo/qrcode/santa-teresinha',component:SantaTeresinhaComponent},
  {path:'colaboracao/dizimo/qrcode/ns-rosario',component:NsRosarioComponent},
  {path:'colaboracao/dizimo/qrcode/ns-perpetuo-socorro',component:NsPerpetuoSocorroComponent},
  {path:'colaboracao/dizimo/qrcode/sao-pedro',component:SaoPedroComponent},
  {path:'colaboracao/dizimo/qrcode/sc-jesus',component:ScJesusComponent},

  {path:'colaboracao/ofertas/qrcode/santa-teresinha',component:SantaTeresinhaOfertasComponent},
  {path:'colaboracao/ofertas/qrcode/ns-rosario',component:NsRosarioOfertasComponent},
  {path:'colaboracao/ofertas/qrcode/ns-perpetuo-socorro',component:NsPerpetuoSocorroOfertasComponent},
  {path:'colaboracao/ofertas/qrcode/sao-pedro',component:SaoPedroOfertasComponent},
  {path:'colaboracao/ofertas/qrcode/sc-jesus',component:ScJesusOfertasComponent},

  {path:'colaboracao/doacoes/qrcode/santa-teresinha',component:SantaTeresinhaDoacoesComponent},
  {path:'colaboracao/doacoes/qrcode/ns-rosario',component:NsRosarioDoacoesComponent},
  {path:'colaboracao/doacoes/qrcode/ns-perpetuo-socorro',component:NsPerpetuoSocorroDoacoesComponent},
  {path:'colaboracao/doacoes/qrcode/sao-pedro',component:SaoPedroDoacoesComponent},
  {path:'colaboracao/doacoes/qrcode/sc-jesus',component:ScJesusDoacoesComponent},

  {path:'colaboracao',component:ColaboracaoComponent},
  {path:'colaboracao/dizimo',component:DizimoComponent},
  {path:'colaboracao/oferta',component:OfertaComponent},
  {path:'colaboracao/doacoes',component:DoacoesComponent},
  {path:'criar-coroinha/:id',component:CriarCoroinhaComponent},
  {path:'criar-ministro/:id',component:CriarMinistroComponent},
  {path:'criar-celebrante/:id',component:CriarCelebranteComponent},
  {path:'criar-liturgia/:id',component:CriarLiturgiaComponent},
  {path:'consultar-escala-coroinha',component:ConsultarCoroinhaComponent},
  {path:'consultar-escala-ministro',component:ConsultarMinistroComponent},
  {path:'consultar-escala-celebrante',component:ConsultaCelebranteComponent},
  {path:'consultar-escala-liturgia',component:ConsultarLiturgiaComponent},
  {path:'consultar-escala-geral',component:EscalaGeralComponent},
  {path:'category-consultar',component:CategoryConsultarEscalaComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'login',component:LoginComponent},
  {path:'mudarsenha',component:ChangepasswordComponent},
  {path:'escala-coroinha-pdf',component:EscalaCoroinhaPdfComponent},
  {path:'escala-ministro-pdf',component:EscalaMinistroPdfComponent},
  {path:'escala-celebrante-pdf',component:EscalaCelebrantePdfComponent},
  {path:'escala-liturgia-pdf',component:EscalaLiturgiaPdfComponent},
  {path:'escala-geral-pdf',component:EscalaGeralPdfComponent},
  {path:'home-page',component:HomeInicialComponent},
  {
    path:'admin/agentes',component:UsuariosComponent,
    loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
    canActivate:[RouterGuardService],
    data:{
    expectedRole:['admin']  
    }
  },
  {
    path:'admin/usuarios',component:PermissoesComponent,
    loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
    canActivate:[RouterGuardService],
    data:{
    expectedRole:['admin']  
    }
  },
  {
    path:'admin/config-home-page',component:ConfigHomePageComponent,
    loadChildren:()=> import('./material/material.module').then(m=>m.MaterialModule),
    canActivate:[RouterGuardService],
    data:{
    expectedRole:['admin']  
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

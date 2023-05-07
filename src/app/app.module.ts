
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MaterialModule} from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { CategoriaCriarEscalaComponent } from './components/categoria-criar-escala/categoria-criar-escala.component';
import { ConsultarCoroinhaComponent } from './components/consultar-escala/coroinha/consultar-coroinha/consultar-coroinha.component';
import { CriarCoroinhaComponent } from './components/criar-escala/coroinha/criar-coroinha/criar-coroinha.component';
import { FiltroCoroinhaPipe } from './pipes/filtro-coroinha.pipe';
import { FilterCoroinhaDataPipe } from './pipes/filter-coroinha-data.pipe';
import { LoginComponent } from './components/login/login.component';
import { CategoryConsultarEscalaComponent } from './components/category-consultar-escala/category-consultar-escala.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { FilterCoroinhaAnoPipe } from './pipes/filter-coroinha-ano.pipe';
import { UsuariosComponent } from './components/funcoes-admin/usuarios/usuarios.component';
import { CriaUsuarioComponent } from './components/funcoes-admin/usuarios/cria-usuario/cria-usuario.component';
import { AtualizaUsuarioComponent } from './components/funcoes-admin/usuarios/atualiza-usuario/atualiza-usuario.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PermissoesComponent } from './components/funcoes-admin/usuarios/permissoes/permissoes.component';
import { UpdateComponent } from './components/funcoes-admin/usuarios/permissoes/update/update.component';
import { UploadImageComponent } from './components/header/upload-image/upload-image.component';
import { EscalaCoroinhaPdfComponent } from './components/arquivos-pdf/escala-coroinha-pdf/escala-coroinha-pdf.component';
import { CriarMinistroComponent } from './components/criar-escala/ministro/criar-ministro/criar-ministro.component';
import { ConsultarMinistroComponent } from './components/consultar-escala/ministro/consultar-ministro/consultar-ministro.component';
import { EscalaMinistroPdfComponent } from './components/arquivos-pdf/escala-ministro-pdf/escala-ministro-pdf.component';
import { CriarCelebranteComponent } from './components/criar-escala/celebrante/criar-celebrante/criar-celebrante.component';
import { ConsultaCelebranteComponent } from './components/consultar-escala/celebrante/consulta-celebrante/consulta-celebrante.component';
import { EscalaCelebrantePdfComponent } from './components/arquivos-pdf/escala-celebrante-pdf/escala-celebrante-pdf.component';
import { FilterMinistroPipe } from './pipes/filter-ministro.pipe';
import { FilterMinistroDataPipe } from './pipes/filter-ministro-data.pipe';
import { FilterMinistroAnoPipe } from './pipes/filter-ministro-ano.pipe';
import { FilterCelebrantePipe } from './pipes/filter-celebrante.pipe';
import { FilterCelebranteDataPipe } from './pipes/filter-celebrante-data.pipe';
import { FilterCelebranteAnoPipe } from './pipes/filter-celebrante-ano.pipe';
import { CriarLiturgiaComponent } from './components/criar-escala/liturgia/criar-liturgia/criar-liturgia.component';
import { ConsultarLiturgiaComponent } from './components/consultar-escala/liturgia/consultar-liturgia/consultar-liturgia.component';
import { EscalaLiturgiaPdfComponent } from './components/arquivos-pdf/escala-liturgia-pdf/escala-liturgia-pdf.component';
import { EscalaGeralComponent } from './components/consultar-escala/geral/escala-geral/escala-geral.component';
import { FilterLiturgiaPipe } from './pipes/filter-liturgia.pipe';
import { FilterLiturgiaAnoPipe } from './pipes/filter-liturgia-ano.pipe';
import { FilterLiturgiaDataPipe } from './pipes/filter-liturgia-data.pipe';
import { FilterGeralPipe } from './pipes/filter-geral.pipe';
import { FilterGeralAnoPipe } from './pipes/filter-geral-ano.pipe';
import { FilterGeralDataPipe } from './pipes/filter-geral-data.pipe';
import { EscalaGeralPdfComponent } from './components/arquivos-pdf/escala-geral-pdf/escala-geral-pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ConsultarCoroinhaComponent,
    CriarCoroinhaComponent,
    CadastroComponent,
    FiltroCoroinhaPipe,
    FilterCoroinhaDataPipe,
    LoginComponent,
    CategoryConsultarEscalaComponent,
    CategoriaCriarEscalaComponent,
    ForgotPasswordComponent,
    FilterCoroinhaAnoPipe,
    UsuariosComponent,
    CriaUsuarioComponent,
    AtualizaUsuarioComponent,
    ChangepasswordComponent,
    PermissoesComponent,
    UpdateComponent,
    UploadImageComponent,
    EscalaCoroinhaPdfComponent,
    CriarMinistroComponent,
    ConsultarMinistroComponent,
    EscalaMinistroPdfComponent,
    CriarCelebranteComponent,
    ConsultaCelebranteComponent,
    EscalaCelebrantePdfComponent,
    FilterMinistroPipe,
    FilterMinistroDataPipe,
    FilterMinistroAnoPipe,
    FilterCelebrantePipe,
    FilterCelebranteDataPipe,
    FilterCelebranteAnoPipe,
    CriarLiturgiaComponent,
    ConsultarLiturgiaComponent,
    EscalaLiturgiaPdfComponent,
    EscalaGeralComponent,
    FilterLiturgiaPipe,
    FilterLiturgiaAnoPipe,
    FilterLiturgiaDataPipe,
    FilterGeralPipe,
    FilterGeralAnoPipe,
    FilterGeralDataPipe,
    EscalaGeralPdfComponent

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
  providers: [AppService,HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})


export class AppModule { }

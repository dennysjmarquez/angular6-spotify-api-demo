import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pipes
import { NoimagePipe } from './components/pipes/noimage.pipe';
import { DomseguroPipe } from './components/pipes/domseguro.pipe';

// guards
import {AuthGuardService} from './components/services/auth-guard.service.ts.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routers';
import { HttpClientModule } from '@angular/common/http';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AccessTokenComponent } from './components/access-token/access-token.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    TarjetasComponent,
    LoadingComponent,
    NoimagePipe,
    DomseguroPipe,
    AccessTokenComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

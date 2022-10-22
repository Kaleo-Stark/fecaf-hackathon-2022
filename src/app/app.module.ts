import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Declaração dos compoentes desenvolvidos
import { CadastroDarCaronaComponent } from './telas/cadastro-dar-carona/cadastro-dar-carona.component';
import { CadastroPegarCaronaComponent } from './telas/cadastro-pegar-carona/cadastro-pegar-carona.component';
import { DashboardPegarCaronaComponent } from './telas/dashboard-pegar-carona/dashboard-pegar-carona.component';
import { DashboardDarCaronaComponent } from './telas/dashboard-dar-carona/dashboard-dar-carona.component';
import { ListaOpcoesDeCaronaComponent } from './telas/lista-opcoes-de-carona/lista-opcoes-de-carona.component';
import { ListaStatusDeCaronaComponent } from './telas/lista-status-de-carona/lista-status-de-carona.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroDarCaronaComponent,
    CadastroPegarCaronaComponent,
    DashboardPegarCaronaComponent,
    DashboardDarCaronaComponent,
    ListaOpcoesDeCaronaComponent,
    ListaStatusDeCaronaComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

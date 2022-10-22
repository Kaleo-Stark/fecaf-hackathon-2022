import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Import dos componentes que serão utilzados como tela.
import { CadastroPegarCaronaComponent } from './telas/cadastro-pegar-carona/cadastro-pegar-carona.component';
import { CadastroDarCaronaComponent } from './telas/cadastro-dar-carona/cadastro-dar-carona.component';
import { DashboardPegarCaronaComponent } from './telas/dashboard-pegar-carona/dashboard-pegar-carona.component';
import { DashboardDarCaronaComponent } from './telas/dashboard-dar-carona/dashboard-dar-carona.component';
import { ListaOpcoesDeCaronaComponent } from './telas/lista-opcoes-de-carona/lista-opcoes-de-carona.component';
import { ListaStatusDeCaronaComponent } from './telas/lista-status-de-carona/lista-status-de-carona.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-dar-carona',
    component: CadastroDarCaronaComponent
  },
  {
    path: 'cadastro-pegar-carona',
    component: CadastroPegarCaronaComponent
  },
  {
    path: 'dashboard-pegar-carona',
    component: DashboardPegarCaronaComponent
  },
  {
    path: 'dashboard-dar-carona',
    component: DashboardDarCaronaComponent
  },
  {
    path: 'lista-opcoes-de-carona',
    component: ListaOpcoesDeCaronaComponent
  },
  {
    path: 'lista-status-de-carona',
    component: ListaStatusDeCaronaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

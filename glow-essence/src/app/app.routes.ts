import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  {
    path: 'app-cadastro',
    component: CadastroComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'app-home',
    component: HomeComponent,
  },
  {
    path: 'app-carrinho',
    component: CarrinhoComponent,
  },
  {
    path: 'app-favoritos',
    component: FavoritosComponent,
  },
  {
    path: 'app-perfil',
    component: PerfilComponent,
  },
];

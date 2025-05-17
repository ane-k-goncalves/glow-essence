import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "app-cadastro",
        component: CadastroComponent
    },
   // {
     //   path: "",
       // component: LoginComponent
    //},
      {
        path: "",
        component: HomeComponent
    }
]

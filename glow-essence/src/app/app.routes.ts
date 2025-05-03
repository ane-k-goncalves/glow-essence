import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "app-cadastro",
        component: CadastroComponent
    },
    {
        path: "",
        component: LoginComponent
    }
]

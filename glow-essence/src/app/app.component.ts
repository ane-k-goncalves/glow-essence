import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
    standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CadastroComponent, FormsModule, HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'glow-essence';
}

import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  nome = '';
  cpf = 0;
  email = '';
  endereco = '';
  cep = 0;
  password = '';
  confirmPassword = '';

  constructor(private userService: UserService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    this.userService.getUserByEmail(this.email).subscribe((users) => {
      const userExists = users.some(user => user.email.toLowerCase() === this.email.toLowerCase());
      if (userExists) {
        alert('Usuário já cadastrado!');
      } else {
        const newUser: User = {
          email: this.email,
          password: this.password,
          nome: this.nome,
          cpf: this.cpf,
          endereco: this.endereco,
          cep: this.cep,
        
        };
        this.userService.addUser(newUser).subscribe(() => {
          alert('Usuário cadastrado com sucesso!');
        });
      }
    });
  }
}

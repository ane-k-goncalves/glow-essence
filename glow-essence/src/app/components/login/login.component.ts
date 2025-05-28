import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  standalone: true,
  selector: 'app-login',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    email: string = '';
    password: string = '';


  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.getUserByEmail(this.email).subscribe(users => {
      const user = users.find(u => u.password === this.password);
      if (user) {
        alert('Login realizado com sucesso!');
         this.router.navigate(['/home']);
      } else {
        alert('Email ou senha inválidos!');
      }
    });
  }
}
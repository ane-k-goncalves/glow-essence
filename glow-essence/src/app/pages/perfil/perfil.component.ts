import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { User, UserService } from '../../services/user.service';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, PrimaryInputComponent, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  @Input() user!: null | User;
  @Output('AlterarDados') onSubmit = new EventEmitter<User>();

  form!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
     console.log(this.user); 

    this.form = this.fb.group({
      nome: [this.user?.nome || ''],
      cpf: [this.user?.cpf || ''],
      email: [this.user?.email || ''],
      endereco: [this.user?.endereco || ''],
      cep: [this.user?.cep || ''],
      password: [this.user?.password || ''],
      confirmPassword: [''],
    });
  }

  submit() {
     if (!this.user || !this.user.id) {
    console.error('Usuário não está logado ou não tem ID');
    return;
  }

  const updatedUser: User = {
    ...this.user,
    ...this.form.value,
  };

  this.userService.updateUser(updatedUser).subscribe({
    next: (user) => {
      alert('Usuário atualizado com sucesso');
      this.userService.setLoggedUser(user); 
    },
    error: (err) => {
      console.error('Erro ao atualizar o usuário:', err);
    }
  });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-perfil',
  imports: [NavbarComponent, FooterComponent ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent  implements OnInit {
 @Input() user!: null | User; 

 
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
  }
}
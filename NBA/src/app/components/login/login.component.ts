import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent {

  modal: boolean = false;

  utente: string = 'admin';
  password: string = 'admin';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login(): void {
    if (this.utente === 'admin' && this.password === 'admin') {
      console.log('ciao');
      this.router.navigate(['/profilo']);
    } else {
      this.errorMessage = 'Credenziali non valide. Riprova.';
    }
  }
}

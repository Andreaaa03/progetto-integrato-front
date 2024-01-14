import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  utente: string = 'garne';
  password: string = '9090';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login(): void {
    if (this.utente === 'garne' && this.password === '9090') {
      console.log('ciao');
      this.router.navigate(['/profilo']);
    } else {
      this.errorMessage = 'Credenziali non valide. Riprova.';
    }
  }
}

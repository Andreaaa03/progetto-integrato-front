import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent{

  modal: boolean = false;

  registrati: boolean = true;

  registratiView(){
    this.registrati = !this.registrati;
  }

  utente: string = 'admin';
  password: string = 'admin';
  errorMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  confrontUrl(){

    const urlAttuale = this.router.url;

    const urlDesiderato = 'localhost:4200/profilo'

    if(urlAttuale === urlDesiderato){
      location.reload();
    }else{

    }
  }



  login(): void {
    if (this.utente === 'admin' && this.password === 'admin') {
      console.log('ciao');
      this.router.navigate(['/profilo']);
    } else {
      this.errorMessage = 'Credenziali non valide. Riprova.';
    }
  }
}

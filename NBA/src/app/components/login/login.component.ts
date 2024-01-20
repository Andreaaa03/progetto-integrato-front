import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit{

  ngOnInit(): void {
  }

  registrati: boolean = true;

  registratiView(){
    this.registrati = !this.registrati;
  }

  utente: string = 'admin';
  password: string = 'admin';
  errorMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }




  login(): void {
    if (this.utente === 'admin' && this.password === 'admin') {
      this.router.navigate(['/profilo']);
    } else {
      this.errorMessage = 'Credenziali non valide. Riprova.';
    }
  }
}

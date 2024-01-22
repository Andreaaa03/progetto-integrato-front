import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

export class SignupForm {
  mail: string = '';
  ripetiPassword: string = '';
  first_name: string = "";
  last_name: string = "";
  birthDate: string = "";
  passwd: string = "";
  numeroTelefono: string = "";
  username: string = "";
  sesso: string = "";
}
export class SigninForm {
  mail: string = '';
  password: string = '';
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private location: Location, private router: Router, private apiService: ApiService) { }
  dateToday = dayjs().format('YYYY-MM-DD');
  isMobileMenuOpen: boolean = false;
  toggleMenu(isMobileMenuOpen: boolean) {
    this.isMobileMenuOpen = !isMobileMenuOpen;
  }
  confrontUrl() {
    const urlAttuale = this.location.path().split("/")[1]
    const urlDesiderato = 'profilo';
    if (urlAttuale === urlDesiderato) {
      this.modal = false
    } else {
      this.modal = true;
    }
  }
  
  token: string | null = null;
  ngOnInit(): void {
    this.token = localStorage.getItem('authToken');
  }
  
  //login e registrati
  signupForm: SignupForm = new SignupForm();
  signinForm: SigninForm = new SigninForm();
  modal: boolean = false;
  registrati: boolean = false;

  registratiView() {
    this.registrati = !this.registrati;
  }

  
  selectedOption: string = '';
  errorMessage: string = '';
  succesfulMessage: string = "";
  // mail: string = 'giorgio.modeo@gmail.com';
  // password: string = 'sonoio';

  login(): void {
    console.log(this.signupForm.birthDate,this.signinForm.password);
    this.apiService.SendLogin(this.signinForm.mail, this.signinForm.password).subscribe(
      (risposta:any) => {
        this.token=risposta.token;
        localStorage.setItem('authToken', risposta.token);
        this.router.navigate(['/profilo']);
      },
      (errore) => {
        console.error('Errore durante il login:', errore);
      }
    );
  }

  signup(){
    if(this.signupForm.passwd === this.signupForm.ripetiPassword){
      console.log(this.signupForm.first_name+"-"+ this.signupForm.last_name+"-"+ this.signupForm.birthDate+"-"+ this.signupForm.mail+"-"+ this.signupForm.passwd+"-"+ this.signupForm.numeroTelefono+"-"+ this.signupForm.username+"-"+ this.signupForm.sesso)
      this.apiService.SendSignup(this.signupForm.first_name, this.signupForm.last_name, this.signupForm.birthDate, this.signupForm.mail, this.signupForm.passwd, this.signupForm.numeroTelefono, this.signupForm.username, this.signupForm.sesso).subscribe(
        (risposta: any) => {
          this.succesfulMessage=risposta.error;
          console.log('Registrazione andata a buon fine:', risposta.status);
        },
        (errore) => {
          if(errore.status>=200 && errore.status<=299){  
            this.succesfulMessage=errore.error;
            console.log('Registrazione andata a buon fine:', errore.status);
          }else{
            this.errorMessage = "Registrazione fallita!" + errore.error;
            console.log('Registrazione fallita:', errore.error.error);
          }
        }
      )
    }else{
      this.errorMessage="Le password non corrispondo!";
    }
  }
}
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private location: Location, private router: Router, private route: ActivatedRoute,) { }
  dateToday = dayjs().format('YYYY-MM-DD');
  isMobileMenuOpen: boolean = false;
  modal: boolean = true;
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


  //login e registrati
  registrati: boolean = false;

  registratiView() {
    this.registrati = !this.registrati;
  }

  utente: string = 'admin';
  password: string = 'admin';
  errorMessage: string = '';


  selectedOption: string = '';

  onSelectionChange() {
    console.log('Opzione selezionata:', this.selectedOption);
  }


  login(): void {
    if (this.utente === 'admin' && this.password === 'admin') {
      this.router.navigate(['/profilo']);
    } else {
      this.errorMessage = 'Credenziali non valide. Riprova.';
    }
  }
}

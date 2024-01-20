import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private location: Location) { }
  dateToday = dayjs().format('YYYY-MM-DD');
  isMobileMenuOpen: boolean = false;
  modal: boolean = false;
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
}

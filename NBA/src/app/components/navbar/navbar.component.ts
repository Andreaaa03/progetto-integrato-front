import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  isMobileMenuOpen: boolean = false;
  modal:boolean=false;
  toggleMenu(isMobileMenuOpen: boolean) {
    console.log(isMobileMenuOpen);
    this.isMobileMenuOpen = !isMobileMenuOpen;
  }
}

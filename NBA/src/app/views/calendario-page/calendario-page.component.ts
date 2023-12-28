import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-page',
  templateUrl: './calendario-page.component.html',
  styleUrls: ['./calendario-page.component.css']
})
export class CalendarioPageComponent implements OnInit {

  ngOnInit(): void {
    this.initDate();
    this.getNoOfDaysLeft();
    this.getNoOfDaysCentral();
    this.getNoOfDaysRigth();
    console.log(this.MONTH_NAMES[this.currentMonthRigth]);
    console.log("onIniti");
  }
  MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  currentMonthCentral: number = 0;
  currentYearCentral: number = 2023;
  currentDayCentral: number = 0;
  currentMonthLeft: number = 0;
  currentYearLeft: number = 2023;
  currentDayLeft: number = 0;
  currentMonthRigth: number = 0;
  currentYearRigth: number = 2023;
  currentDayRigth: number = 0;
  no_of_days_central: number[] = [];
  no_of_days_left: number[] = [];
  no_of_days_rigth: number[] = [];
  blankdays_central: number[] = [];
  blankdays_left: number[] = [];
  blankdays_rigth: number[] = [];
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  openEventModal = false;

  initDate() {
    let today = new Date();
    this.currentMonthCentral = today.getMonth();
    this.currentYearCentral = today.getFullYear();
    this.currentDayCentral = today.getDay();
    console.log(today);
    this.currentMonthLeft = this.currentMonthCentral - 1;

    if (this.currentMonthCentral + 1 >= 11) {
      this.currentYearRigth = this.currentYearCentral + 1;
      this.currentMonthRigth = 0;
    } else {
      this.currentMonthRigth = this.currentMonthCentral;
    }

    if (this.currentMonthLeft - 1 <= 0) {
      this.currentYearLeft = this.currentYearCentral - 1;
      this.currentMonthLeft = 11;
    } else {
      this.currentMonthLeft = this.currentMonthCentral - 1;
    }
    // this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
  };

  isToday(date: number) {
    const today = new Date();
    const d = new Date(this.currentYearCentral, this.currentMonthCentral, this.currentDayCentral, date);

    return today.toDateString() === d.toDateString() ? true : false;
  };


  getNoOfDaysLeft() {
    let daysInMonthLeft = new Date(this.currentYearLeft, this.currentMonthLeft + 1, 0).getDate();


    // find where to start calendar day of week
    let dayOfWeekLeft = new Date(this.currentYearLeft, this.currentMonthLeft).getDay();

    let blankdaysArrayLeft = [];
    for (let i = 1; i < dayOfWeekLeft; i++) {
      blankdaysArrayLeft.push(i);
    }

    let daysArrayLeft = [];
    for (let i = 1; i <= daysInMonthLeft; i++) {
      daysArrayLeft.push(i);
    }

    this.blankdays_left = blankdaysArrayLeft;
    this.no_of_days_left = daysArrayLeft;
  }
  getNoOfDaysCentral() {
    let daysInMonthCentral = new Date(this.currentYearCentral, this.currentMonthCentral + 1, 0).getDate();
    console.log(this.currentYearCentral);

    // find where to start calendar day of week
    let dayOfWeekCentral = new Date(this.currentYearCentral, this.currentMonthCentral).getDay();

    let blankdaysArrayCentral = [];
    for (let i = 1; i < dayOfWeekCentral; i++) {
      blankdaysArrayCentral.push(i);
    }

    let daysArrayCentral = [];
    for (let i = 1; i <= daysInMonthCentral; i++) {
      daysArrayCentral.push(i);
    }

    this.blankdays_central = blankdaysArrayCentral;
    this.no_of_days_central = daysArrayCentral;
  }
  getNoOfDaysRigth() {
    let daysInMonthRigth = new Date(this.currentYearRigth, this.currentMonthRigth + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeekRigth = new Date(this.currentYearRigth, this.currentMonthRigth).getDay();

    let blankdaysArrayRigth = [];
    for (let i = 1; i < dayOfWeekRigth; i++) {
      blankdaysArrayRigth.push(i);
    }

    let daysArrayRigth = [];
    for (let i = 1; i <= daysInMonthRigth; i++) {
      daysArrayRigth.push(i);
    }

    this.blankdays_rigth = blankdaysArrayRigth;
    this.no_of_days_rigth = daysArrayRigth;
  }

  incrementMonth(currentMonthLeft: number, currentMonthCentral: number, currentMonthRigth: number) {
    if (this.currentMonthLeft + 1 > 11) {
      this.currentMonthLeft = 0;
      this.currentYearLeft++;
    } else
      this.currentMonthLeft = currentMonthLeft + 1;

    if (currentMonthCentral + 1 > 11) {
      this.currentMonthCentral = 0;
      this.currentYearCentral++;
    } else
      this.currentMonthCentral = currentMonthCentral + 1;

    if (currentMonthRigth + 1 > 11) {
      this.currentMonthRigth = 0;
      this.currentYearRigth++;
    } else
      this.currentMonthRigth = currentMonthRigth + 1;

    this.getNoOfDaysLeft();
    this.getNoOfDaysCentral();
    this.getNoOfDaysRigth();
  }

  decrementMonth(currentMonthLeft: number, currentMonthCentral: number, currentMonthRigth: number) {
    if (this.currentMonthLeft - 1 < 0) {
      this.currentMonthLeft = 11;
      this.currentYearLeft--;
    } else
      this.currentMonthLeft = currentMonthLeft - 1;

    if (currentMonthCentral - 1 < 0) {
      this.currentMonthCentral = 11;
      this.currentYearCentral--;
    } else
      this.currentMonthCentral = currentMonthCentral - 1;

    if (currentMonthRigth - 1 < 0) {
      this.currentMonthRigth = 11;
      this.currentYearRigth--;
    } else
      this.currentMonthRigth = currentMonthRigth - 1;

    this.getNoOfDaysLeft();
    this.getNoOfDaysCentral();
    this.getNoOfDaysRigth();
  }
}

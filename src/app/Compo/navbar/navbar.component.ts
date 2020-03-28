import { Component, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('background', {static: false}) background: ElementRef;

  // this.donation.nativeElement.style.backgroundColor  = "red"; 



  constructor() { }



  ngOnInit() {
  }

  menu($event){

    console.log("hello world",$event);
    this.background.nativeElement.style.display="grid";

  }

  close(){
    this.background.nativeElement.style.display="none";

  }




}


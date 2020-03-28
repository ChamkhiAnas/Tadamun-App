import { Component, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  @ViewChild('list0', {static: false}) list0: ElementRef;
  @ViewChild('list1', {static: false}) list1: ElementRef;
  @ViewChild('list2', {static: false}) list2: ElementRef;
  @ViewChild('list3', {static: false}) list3: ElementRef;
  @ViewChild('list4', {static: false}) list4: ElementRef;

  @ViewChild('plus0', {static: false}) plus0: ElementRef;
  @ViewChild('minus0', {static: false}) minus0: ElementRef;

  @ViewChild('plus1', {static: false}) plus1: ElementRef;
  @ViewChild('minus1', {static: false}) minus1: ElementRef;

  @ViewChild('plus2', {static: false}) plus2: ElementRef;
  @ViewChild('minus2', {static: false}) minus2: ElementRef;

  @ViewChild('plus3', {static: false}) plus3: ElementRef;
  @ViewChild('minus3', {static: false}) minus3: ElementRef;

  @ViewChild('plus4', {static: false}) plus4: ElementRef;
  @ViewChild('minus4', {static: false}) minus4: ElementRef;

  @ViewChild('plus5', {static: false}) plus5: ElementRef;
  @ViewChild('minus5', {static: false}) minus5: ElementRef;

  @ViewChild('plus6', {static: false}) plus6: ElementRef;
  @ViewChild('minus6', {static: false}) minus6: ElementRef;

  @ViewChild('plus7', {static: false}) plus7: ElementRef;
  @ViewChild('minus7', {static: false}) minus7: ElementRef;

  @ViewChild('plus9', {static: false}) plus9: ElementRef;
  @ViewChild('minus9', {static: false}) minus9: ElementRef;

  @ViewChild('plus10', {static: false}) plus10: ElementRef;
  @ViewChild('minus10', {static: false}) minus10: ElementRef;







  @ViewChild('box1', {static: false}) box1: ElementRef;
  @ViewChild('box2', {static: false}) box2: ElementRef;
  @ViewChild('box3', {static: false}) box3: ElementRef;
  @ViewChild('box4', {static: false}) box4: ElementRef;
  @ViewChild('box5', {static: false}) box5: ElementRef;
  @ViewChild('box6', {static: false}) box6: ElementRef;

  @ViewChild('box7', {static: false}) box7: ElementRef;
  @ViewChild('box8', {static: false}) box8: ElementRef;

  @ViewChild('box10', {static: false}) box10: ElementRef;















  indexOfmom:number=0;
  i:number=0;
  showing:boolean=false;
  show0:boolean=false;
  show1:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  show4:boolean=false;
  show5:boolean=false;
  show6:boolean=false;
  show7:boolean=false;








  constructor() { }

  ngOnInit() {
    
  setInterval(() => {

    if(this.i>=4){
      this.i=0
    }
  
    this.momayazat(this.i)
    this.i=this.i+1
    }, 5000);

  }

  momayazat(num){
    this.i=num
    this.indexOfmom=num
    if(this.indexOfmom==0){
        this.list0.nativeElement.style.color="black";
        this.list1.nativeElement.style.color="#a4abbb";
        this.list2.nativeElement.style.color="#a4abbb";
        this.list3.nativeElement.style.color="#a4abbb";
        this.list4.nativeElement.style.color="#a4abbb";
    }
    if(this.indexOfmom==1){
      this.list1.nativeElement.style.color="black";
      this.list0.nativeElement.style.color="#a4abbb";
      this.list2.nativeElement.style.color="#a4abbb";
      this.list3.nativeElement.style.color="#a4abbb";
      this.list4.nativeElement.style.color="#a4abbb";
    }
    if(this.indexOfmom==2){
      this.list2.nativeElement.style.color="black";
      this.list0.nativeElement.style.color="#a4abbb";
      this.list1.nativeElement.style.color="#a4abbb";
      this.list3.nativeElement.style.color="#a4abbb";
      this.list4.nativeElement.style.color="#a4abbb";
    }
    if(this.indexOfmom==3){
      this.list3.nativeElement.style.color="black";
      this.list0.nativeElement.style.color="#a4abbb";
      this.list1.nativeElement.style.color="#a4abbb";
      this.list2.nativeElement.style.color="#a4abbb";
      this.list4.nativeElement.style.color="#a4abbb";
    }
    if(this.indexOfmom==4){
      this.list4.nativeElement.style.color="black";
      this.list0.nativeElement.style.color="#a4abbb";
      this.list1.nativeElement.style.color="#a4abbb";
      this.list2.nativeElement.style.color="#a4abbb";
      this.list3.nativeElement.style.color="#a4abbb";
    }

  }

 plu0(){


  this.plus0.nativeElement.style.display="none"
  this.minus0.nativeElement.style.display="block"
  this.show0=true;
  this.box1.nativeElement.style.marginBottom="0px";


  console.log(this.minus0.nativeElement.style.display)

 }

 minu0(){
   
  this.plus0.nativeElement.style.display="block"
  this.minus0.nativeElement.style.display="none"
  this.show0=false;
  this.box1.nativeElement.style.marginBottom="25px";



  console.log(this.minus0.nativeElement.style.display)

 }

 plu1(){


  this.plus1.nativeElement.style.display="none"
  this.minus1.nativeElement.style.display="block"
  this.show1=true;
  this.box2.nativeElement.style.marginBottom="0px";


  console.log(this.minus0.nativeElement.style.display)

 }

 minu1(){
   
  this.plus1.nativeElement.style.display="block"
  this.minus1.nativeElement.style.display="none"
  this.show1=false;
  this.box2.nativeElement.style.marginBottom="25px";



  console.log(this.minus0.nativeElement.style.display)

 }


 plu2(){


  this.plus2.nativeElement.style.display="none"
  this.minus2.nativeElement.style.display="block"
  this.show2=true;
  this.box3.nativeElement.style.marginBottom="0px";


  console.log(this.minus2.nativeElement.style.display)

 }

 minu2(){
   
  this.plus2.nativeElement.style.display="block"
  this.minus2.nativeElement.style.display="none"
  this.show2=false;
  this.box3.nativeElement.style.marginBottom="25px";

  console.log(this.minus2.nativeElement.style.display)

 }


 plu3(){


  this.plus3.nativeElement.style.display="none"
  this.minus3.nativeElement.style.display="block"
  this.show3=true;
  this.box4.nativeElement.style.marginBottom="0px";


  console.log(this.minus3.nativeElement.style.display)

 }

 minu3(){
   
  this.plus3.nativeElement.style.display="block"
  this.minus3.nativeElement.style.display="none"
  this.show3=false;
  this.box4.nativeElement.style.marginBottom="25px";

  console.log(this.minus3.nativeElement.style.display)

 }

 
 plu4(){


  this.plus4.nativeElement.style.display="none"
  this.minus4.nativeElement.style.display="block"
  this.show4=true;
  this.box5.nativeElement.style.marginBottom="0px";


  console.log(this.minus3.nativeElement.style.display)

 }

 minu4(){
   
  this.plus4.nativeElement.style.display="block"
  this.minus4.nativeElement.style.display="none"
  this.show4=false;
  this.box5.nativeElement.style.marginBottom="25px";

  console.log(this.minus3.nativeElement.style.display)

 }

 plu5(){


  this.plus5.nativeElement.style.display="none"
  this.minus5.nativeElement.style.display="block"
  this.show5=true;
  this.box6.nativeElement.style.marginBottom="0px";


  console.log(this.minus3.nativeElement.style.display)

 }

 minu5(){
   
  this.plus5.nativeElement.style.display="block"
  this.minus5.nativeElement.style.display="none"
  this.show5=false;
  this.box6.nativeElement.style.marginBottom="25px";

  console.log(this.minus3.nativeElement.style.display)

 }

 plu6(){


  this.plus6.nativeElement.style.display="none"
  this.minus6.nativeElement.style.display="block"
  this.show6=true;
  this.box7.nativeElement.style.marginBottom="0px";


  console.log(this.minus3.nativeElement.style.display)

 }

 minu6(){
   
  this.plus6.nativeElement.style.display="block"
  this.minus6.nativeElement.style.display="none"
  this.show6=false;
  this.box7.nativeElement.style.marginBottom="25px";

  console.log(this.minus3.nativeElement.style.display)

 }



 plu7(){


  this.plus7.nativeElement.style.display="none"
  this.minus7.nativeElement.style.display="block"
  this.show7=true;
  this.box8.nativeElement.style.marginBottom="0px";


  console.log(this.minus3.nativeElement.style.display)

 }

 minu7(){
   
  this.plus7.nativeElement.style.display="block"
  this.minus7.nativeElement.style.display="none"
  this.show7=false;
  this.box8.nativeElement.style.marginBottom="25px";

  console.log(this.minus3.nativeElement.style.display)

 }



show(){
  this.showing=true;
  this.plus9.nativeElement.style.display="none";
  this.minus9.nativeElement.style.display="block" ;
  console.log(this.plus9.nativeElement.style.display);
  console.log(this.minus9.nativeElement.style.display);


}


hide(){
  this.showing=false;
  this.plus9.nativeElement.style.display="block";
  this.minus9.nativeElement.style.display="none" ;
  console.log("hello wolrd")

}


sho(){
  this.showing=true;
  this.plus10.nativeElement.style.display="none";
  this.minus10.nativeElement.style.display="block" ;
  console.log(this.plus9.nativeElement.style.display);
  console.log(this.minus9.nativeElement.style.display);


}


hid(){
  this.showing=false;
  this.plus10.nativeElement.style.display="block";
  this.minus10.nativeElement.style.display="none" ;
  console.log("hello wolrd")

}
























}


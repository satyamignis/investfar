import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {
  preloadimg:any;

  constructor() { }

  ngOnInit() {
  	 window.scrollTo(0, 0);
  	 this.preloadimg=true;
     setInterval(() => {  
         this.preloadimg=false;
     }, 1000);
  }

}

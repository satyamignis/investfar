import { Component, OnInit } from '@angular/core';
import { RouterModule, Router,ActivatedRoute }   from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.headericonAdd();
  }


  onResize(event) {
    this.headericonAdd();
  }

  headericonAdd(){
    if(window.innerWidth < 768){
        $('.header-lower.top-nav li.dropdown').append('<div class="dropdown-btn"><Span class="fa fa-angle-down"></span></div>');
        $('.header-lower.top-nav li.dropdown .dropdown-btn').on('click', function() {
          $(this).prev('ul').slideToggle(500);
        });


       $('.loginSuccessMenu').on('click',function(){
         $('.loginOpen').toggle();
       })
    }
  }


}

import { Component, OnInit } from '@angular/core';
declare var $: any; // Esto es para que funcione el codigo JQuery

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slider').slider();
  }

}

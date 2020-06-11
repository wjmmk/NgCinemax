import { Component, OnInit } from '@angular/core';
declare var $: any; // Esto es para que funcione el codigo JQuery

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel();
  }

}

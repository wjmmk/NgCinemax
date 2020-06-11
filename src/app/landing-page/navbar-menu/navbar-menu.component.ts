import { Component, OnInit } from '@angular/core';
declare var $: any; // Esto es para que funcione el codigo JQuery

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown-trigger').dropdown(); // Codigo JQuery
    $('.sidenav').sidenav();
  }

}

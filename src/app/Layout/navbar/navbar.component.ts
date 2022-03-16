import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  collapseMenu() {
    const menu = document.getElementById('nav-collapse') as HTMLElement;
    
    menu.classList.toggle('hideMenu');
    menu.classList.toggle('showMenu');
  }
}

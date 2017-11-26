import { Component } from '@angular/core';

@Component( {
  selector: 'app-menu',
  styleUrls: [ './menu.css' ],
  templateUrl: './menu.html',
} )
export class MenuC {
  public isCollapsed: boolean = true;

  public toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}

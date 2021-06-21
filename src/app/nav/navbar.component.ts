import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component ({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        .nav.navbar-nav li:hover {background-color: #660708;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) { #searchForm {display: none;} }
        li > a.active { color: #000000; }
    `]
})

export class NavBarComponent {
    constructor(public auth:AuthService) {}
}
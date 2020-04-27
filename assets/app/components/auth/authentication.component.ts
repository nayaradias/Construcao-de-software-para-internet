import { Component } from "@angular/core";

@Component({
  selector: "app-authentication",
  template: `
    <div class="mainAutenticacao">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills AutenticacaoUl">
          <li routerLinkActive="active" class="nav-item">
            <a [routerLink]="['signup']">SignUp</a>
          </li>
          <li routerLinkActive="active" class="nav-item">
            <a [routerLink]="['signin']">SignIn</a>
          </li>
          <li routerLinkActive="active" class="nav-item">
            <a [routerLink]="['logout']">LogOut</a>
          </li>
        </ul>
      </nav>
      <div class="row AutenticacaoContent">
        <div class="col-md-6">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./auth.component.css", "../header/header.component.css"],
})
export class AuthenticationComponent {}

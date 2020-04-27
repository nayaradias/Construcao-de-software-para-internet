import { Component } from "@angular/core";

@Component({
  selector: "app-logout",
  templateUrl: `
            <button class="btn btn-danger"(click)="onLogout()">Logout</button>
    `,
})
export class LogoutComponent {
  onLogout() {}
}

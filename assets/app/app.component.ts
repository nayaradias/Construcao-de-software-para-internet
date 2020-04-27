import { Component } from '@angular/core';
import {MessageService } from "./components/messages/message.service";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[MessageService]
})
export class AppComponent {
}
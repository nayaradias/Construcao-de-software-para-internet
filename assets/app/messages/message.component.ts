import { Component, Input } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { Message } from "./message.model";
@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styles: [
    `
      .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
      }
      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
      }
    `
  ]
})
export class MessageComponent {

color = 'yellow';
tam  = 12;
onMudaStyle(){
    this.color = 'red';
    this.tam = 16;
}
@Input() messageVarClasse: Message = new Message("","","","");
@Input('inputMessage') messageVarClasseAlias: Message = new Message("","","","");
onEdit(){
  alert('Tá funcionando');
}
}

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
@Component({
  selector: "app-messages",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessagesComponent {
  style = {
    color: "#fff",
    fontSize: 13,
  };
  onClick() {
    this.style.color = "#ffff00";
  }
  ondblclick() {
    (this.style.color = "#e50914"), (this.style.fontSize = 16);
  }
  onmouseenter() {
    this.style.color = "#33cc33";
  }
  onmouseleave() {
    this.style.color = "#3366ff";
  }
  @Input() messageVarClasse: Message = new Message("Content", "Author");
  @Output() editClicked_Message = new EventEmitter<string>();
  onEdit() {
    this.editClicked_Message.emit("O texto veio de message para o app");
  }
  onDelet() {}
}

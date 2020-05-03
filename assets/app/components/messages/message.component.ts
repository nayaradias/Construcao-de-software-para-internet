import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
@Component({
  selector: "app-messages",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessagesComponent {
  // style = {
  //   color: "#fff",
  //   fontSize: 13,
  // };
  // onClick() {
  //   this.style.color = "#ffff00";
  // }
  // ondblclick() {
  //   (this.style.color = "#e50914"), (this.style.fontSize = 16);
  // }
  // onmouseenter() {
  //   this.style.color = "#33cc33";
  // }
  // onmouseleave() {
  //   this.style.color = "#3366ff";
  // }
  // onEdit() {
  //   this.editClicked_Message.emit("");
  // }
  // onDelet() {}
  // @Output() editClicked_Message = new EventEmitter<string>();


  @Input() messageVarClasse: Message = new Message("", "");
  constructor(private messageServiceObj: MessageService){}
  onEditService(){
    this.messageServiceObj.editMessage(this.messageVarClasse);
  }
  onDeleteService(){
    debugger;
    this.messageServiceObj.deleteMessage(this.messageVarClasse).subscribe(
      dadosSucesso => console.log(dadosSucesso),
      dadosErro => console.log(dadosErro)
    )
  }
}

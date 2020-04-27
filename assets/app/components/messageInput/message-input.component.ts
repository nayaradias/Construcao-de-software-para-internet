import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
  styleUrls: ["./message-input.component.css"],
})
export class MessageInputComponent {
  constructor(private messageService: MessageService) {}
  onSubmit(form: NgForm) {
    const messageAux = new Message(form.value.myContentngForm, "Teste");
    this.messageService.addMessage(messageAux).subscribe(
      dadosSucesso=>console.log(dadosSucesso),
      dadosErro=>console.log(dadosErro)
    )
    console.log(form);
    form.resetForm();
  }
  onSave(textCosole: string) {
    const messageAux = new Message(textCosole, "Teste");
    this.messageService.addMessage(messageAux);
    console.log(textCosole);
  }
}

import { Component } from '@angular/core';
import { MessageService } from './message.services';
import { Message } from './message.model';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    // providers: [MessageService]
})

export class MessageInputComponent{
    constructor (private messageService: MessageService){}
    onSubmit(form:NgForm){
        const messageAux = new Message('',form.value.myContentngForm,'','Vini');
       this.messageService.addMessage(messageAux);

        console.log(form);

        form.resetForm();
    }
    // onSave(textoConsole: string){
      
    //     const messageAux = new Message('',textoConsole,'Teste','');
    //     this.messageService.addMessage(messageAux);
    //     console.log("Valor salvo:",textoConsole);
    // }
}
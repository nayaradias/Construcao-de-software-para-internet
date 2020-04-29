import { Component, OnInit } from "@angular/core";
import { Message } from "../messages/message.model";
import { MessageService } from "../messages/message.service";

@Component({
    selector: 'app-message-list',
    
    template: `
        <app-message-input></app-message-input>
        <div class="col-md-8 col-md-offset-2">
            <app-messages [messageVarClasse]="msg" 
                (editClicked_Message)="msg.content = $event"
                *ngFor= "let msg of messageS">
            </app-messages>
        </div>
    `,
})

export class MessageListComponent implements OnInit{
    messageS: Message[] = [new Message("Texto da Mensagem-LIST-Comp", "Nayara-LIST-Comp"),
                           new Message("Texto 2 da Mensagem-LIST-Comp", "Dias-LIST-Comp"),
                           new Message("Texto 3 da Mensagem-LIST-Comp", "G-LIST-Comp"),
                          ];

    constructor (private messageService: MessageService) {}

    ngOnInit(): void {
        //messageS aponta para o array messageSService que armazena os dados
        //this.messageS = this.messageService.getMessages();
        this.messageService.getMessages().subscribe(
            (dadosSucesso:Message[])=>{
                this.messageS = dadosSucesso;
                console.log(dadosSucesso);
            },
            dadosErro => console.log(dadosErro)
        );
    }
}

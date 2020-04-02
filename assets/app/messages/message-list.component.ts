import { Component } from "@angular/core";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
                <div class="col-md-8 col-md-offset-2">
                <app-message [messageVarClasse]="msg" (editClicked_MessageMetodoClasse)="msg.content = $event"
                    *ngFor="let msg of messages"></app-message>
                </div>
             `
})

export class MessageListComponent{
    messages: Message[] = [
        new Message("","Texto 1 da mensagem-LIST-Comp","","ViniciusRosalen-LIST-Comp"),
        new Message("","Texto 2 da mensagem-LIST-Comp","","RosalenSilva-LIST-Comp"),
        new Message("","Texto 3 da mensagem-LIST-Comp","","SilvaVinicius-LIST-Comp"),
    ];
}
import { Message } from './message.model';

export class MessageService{
    private messageSService: Message[] = [];

    addMessage(message: Message){
        this.messageSService.push(message);
        console.log(this.messageSService);
    }

    getMessages(){
        return this.messageSService;
    }

    deleteMessage(message: Message){
        this.messageSService.slice(this.messageSService.indexOf(message),1);
    }
}
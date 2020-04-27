import { Component } from '@angular/core';
import { Message } from '../messages/message.model';

@Component({
    selector: 'app-projeto',
    templateUrl: './projeto.component.html',
    styleUrls: ['./projeto.component.css']
  })
  
  export class ProjetoComponent{
    messageBinding: Message = new Message("Messages","Nayara");
    constructor(){}
    ngOnInit(){
    }
  }
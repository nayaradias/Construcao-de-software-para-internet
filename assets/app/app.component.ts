import { Component } from '@angular/core';
import { Message } from './messages/message.model';
// import { User } from './auth/user.model';
// import { Person } from './person/person.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles:[`
        .author{
            display:inline-block;
            font-style:italic;
            font-size:12px;
            width:80%;
        }
        .config{
            display:inline-block;
            text-align:right;
            font-size:12px;
            width:19%;
        }
    `]
})
export class AppComponent {
    
    // message = {
    //     content: 'Tô ficando fera no assunto',
    //     author:'Vinicius'
    // }
    // pessoa1: User = new User("Teste",'Vinicius',"teste2");
    // pessoa2: User;
    // pessoa3: User = new User('','');
   // pessoa1: Person = new Person(101,'teste',25);
   messageBinding: Message = new Message("","Test 1 - Message","","Nayara 1");
   messageBindingAlias: Message = new Message("","Teste 2 - Message Alias","","Nayara 2");
}
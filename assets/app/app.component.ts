import { Component } from '@angular/core';
import { User } from './auth/user.model';

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
    
    message = {
        content: 'Tô ficando fera no assunto',
        author:'Vinicius'
    }
    pessoa1: User = new User("Teste",'Vinicius',"teste2");
    pessoa2: User;
    pessoa3: User = new User('','');
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent} from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
// import { MessagesComponent } from './messages/messages.component
// import { AuthenticationComponent } from './auth/authentication.component';
// import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
// import { HeaderComponent } from './header.component';
@NgModule({ 
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        // AuthenticationComponent       
    ],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
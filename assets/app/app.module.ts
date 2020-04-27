import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { myrouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TarefasComponent } from "./components/tarefas/tarefas.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ProjetoComponent } from "./components/projeto/projeto.component";
import { Tarefa1Component } from "./components/tarefa1/tarefa1.component";
import { Tarefa2Component } from "./components/tarefa2/tarefa2.component";
import { Tarefa3Component } from "./components/tarefa3/tarefa3.component";
import { MessagesComponent } from "./components/messages/message.component";
import { MessageListComponent } from "./components/messageList/message-list.component";
import { MessageInputComponent } from "./components/messageInput/message-input.component";
import { HeaderComponent } from "./components/header/header.component";
import { AuthenticationComponent } from "./components/auth/authentication.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarefasComponent,
    FormularioComponent,
    ProjetoComponent,
    Tarefa1Component,
    Tarefa2Component,
    Tarefa3Component,
    MessagesComponent,
    MessageListComponent,
    MessageInputComponent,
    HeaderComponent,
    AuthenticationComponent,
    LogoutComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule ,myrouting,HttpModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

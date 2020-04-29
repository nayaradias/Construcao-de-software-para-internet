import { Routes } from "@angular/router";
// import { MessagesComponent } from "../messages/message.component";
import { MessageListComponent } from "../messageList/message-list.component";
import { AuthenticationComponent } from "../auth/authentication.component";
import { AUTH_ROUTES } from "../auth/auth.routers";
// import { from } from "rxjs/observable/from";

export const PROJETO_ROUTES: Routes = [
  { path: "mensagens", component: MessageListComponent },
  {
    path: "autenticacao",
    component: AuthenticationComponent,
    children: AUTH_ROUTES,
  },
];

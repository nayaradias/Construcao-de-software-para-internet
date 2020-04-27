import { Routes } from "@angular/router";
import { MessagesComponent } from "../messages/message.component";
import { AuthenticationComponent } from "../auth/authentication.component";
import { AUTH_ROUTES } from "../auth/auth.routers";

export const PROJETO_ROUTES: Routes = [
  { path: "mensagens", component: MessagesComponent },
  {
    path: "autenticacao",
    component: AuthenticationComponent,
    children: AUTH_ROUTES,
  },
];

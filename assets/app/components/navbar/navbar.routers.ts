import { Routes } from "@angular/router";
import { TAREFAS_ROUTES } from "../tarefas/tarefas.routers";
import { PROJETO_ROUTES } from "../projeto/projeto.routers";
import { FORMULARIO_ROUTES } from "../formulario/formulario.routers";

import { TarefasComponent } from '../tarefas/tarefas.component';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProjetoComponent } from "../projeto/projeto.component";

export const NAVBAR_ROUTES: Routes = [
     { path: 'tarefas', component: TarefasComponent ,children:TAREFAS_ROUTES},
     { path: 'formulario', component: FormularioComponent ,children:FORMULARIO_ROUTES},
     { path: 'projeto', component: ProjetoComponent ,children:PROJETO_ROUTES},
 ];

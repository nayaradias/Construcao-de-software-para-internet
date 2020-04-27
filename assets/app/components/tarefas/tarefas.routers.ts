import { Routes } from "@angular/router";
import { Tarefa1Component } from "../tarefa1/tarefa1.component";
import { Tarefa2Component} from "../tarefa2/tarefa2.component";
import { Tarefa3Component} from "../tarefa3/tarefa3.component";

export const TAREFAS_ROUTES: Routes = [
    { path: 'tarefa1', component: Tarefa1Component },
    { path: 'tarefa2', component: Tarefa2Component },
    { path: 'tarefa3', component: Tarefa3Component },
];

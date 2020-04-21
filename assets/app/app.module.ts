import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import  { myrouting } from './app.routing';
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TarefasComponent } from "./components/tarefas/tarefas.component";
import  { FormularioComponent } from "./components/formulario/formulario.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TarefasComponent,
        FormularioComponent     
    ],
    imports: [BrowserModule,FormsModule,myrouting],
    bootstrap: [AppComponent]
})
export class AppModule {

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa1',
  templateUrl: './tarefa1.component.html',
  styleUrls: ['./tarefa1.component.css']
})
export class Tarefa1Component implements OnInit {

  conteudo1 = "Conteúdo da variável de classe do component";
  conteudo2 = 123;
  conteudo3 = 123.45;
  constructor() { }
  ngOnInit(): void {
  }
}

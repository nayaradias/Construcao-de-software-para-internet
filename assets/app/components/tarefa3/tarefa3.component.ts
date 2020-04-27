import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa3',
  templateUrl: './tarefa3.component.html',
  styleUrls: ['../tarefa2/tarefa2.component.css','./tarefa3.component.css']
})
export class Tarefa3Component implements OnInit {

  message = {
    content: 'Hello ! ! ! ',
    author: 'Nayara'
  }
  constructor() { }
  ngOnInit(): void {
  }
}

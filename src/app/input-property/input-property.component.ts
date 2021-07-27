import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  /*
    A declaração de input property também pode ser feita da seguinte forma
    input: ['nomeCurso:nome']
  */
})
export class InputPropertyComponent implements OnInit {

  // 1. expoe o atributo para o component inputPropertyComponent que tem o seletor app-curso
  // 2. dê preferência a utilização do decorator @Input()
  // 3. input property também pode receber objetos
  // 4. as input properties podem ser utilizadas para organizar melhor o projeto, através da criação de dump components
  //que são componentes que simplesmente mostram informações para o usuário
  @Input('nome')
  nomeCurso?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

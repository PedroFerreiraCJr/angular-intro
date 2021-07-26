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

  // expoe a propriedade para o seletor app-curso
  // dê preferência a utilização do decorator @Input
  // input property tambpem poed receber objetos
  // os input properties podem ser utilizados para organizar melhor o projeto, através da criação de dump components
  // que são componentes que simplesmente mostram informações para o usuário
  @Input('nome')
  nomeCurso?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

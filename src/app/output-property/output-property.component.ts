import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  /*
    Opcionalmente, poderia ter sido declardo desta forma
    outputs: ['mudou']
  */
})
export class OutputPropertyComponent {
  @Input()
  valor: string = '0';

  // aula sobre @ViewChild(), uma forma de acessar diretamente o elemento que está no template
  //a partir de uma variável de template que foi previamente declarada. Neste caso a variável
  //é #campoInput, e está declarada em um elemento do tipo input
  @ViewChild('campoInput')
  campoValorInput?: ElementRef;


  // deve ser utilizado esse decorator para expor um evento deste componente
  @Output('mudou')
  mudouEventEmitter = new EventEmitter<{valor: string}>();

  public incrementar(): void {
    this.valor = parseInt(this.valor, 10) + 1 + '';
    this.mudouEventEmitter.emit({valor: this.valor});
    console.log('com viewchild: ', this.campoValorInput?.nativeElement.value);
  }

  public decrementar(): void {
    this.valor = parseInt(this.valor, 10) - 1 + '';
    this.mudouEventEmitter.emit({valor: this.valor});
    console.log('com viewchild: ', this.campoValorInput?.nativeElement.value);
  }
}

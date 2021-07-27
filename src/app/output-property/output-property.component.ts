import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  // deve ser utilizado esse decorator para expor um evento deste componente
  @Output('mudou')
  mudouEventEmitter = new EventEmitter<{valor: string}>();

  public incrementar(): void {
    this.valor = parseInt(this.valor, 10) + 1 + '';
    this.mudouEventEmitter.emit({valor: this.valor});
  }

  public decrementar(): void {
    this.valor = parseInt(this.valor, 10) - 1 + '';
    this.mudouEventEmitter.emit({valor: this.valor});
  }
}

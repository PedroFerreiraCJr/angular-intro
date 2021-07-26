import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // property binding
  url: string = 'https://loiane.training';
  cursoAngular: boolean = true;
  urlImage: string = 'https://lorempixel.com/400/200/city/';

  // event binding
  valorAtual?: string;
  valorSalvo?: string;
  isMouseOver?: boolean;

  // Two-way data binding
  nome: string = 'abc';
  pessoa: any = {
    nome: 'def',
    idade: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  getCityImage(): string {
    return this.urlImage;
  }

  public botaoClicado(): void {
    alert('Botão clicado!');
  }

  public onKeyUp(event: KeyboardEvent): void {
    let input = <HTMLInputElement> event.target;
    this.valorAtual = input.value;
  }

  public onKeyEnter(event: any): void {
    let input = <HTMLInputElement> event?.target;
    this.valorSalvo = input.value;
  }

  public onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }
}

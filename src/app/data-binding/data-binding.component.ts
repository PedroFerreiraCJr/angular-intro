import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.training';
  cursoAngular: boolean = true;
  urlImage: string = 'https://lorempixel.com/400/200/city/';

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
}

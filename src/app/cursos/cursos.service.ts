import { Injectable } from '@angular/core';

// os objetos dessa classe vão estar disponiveis atraves do módulo root do app (AppModule)
// ou seja, tem escopo de toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): string[] {
    return [
      'Java',
      'Angular',
      'Spring Boot 2'
    ];
  }
}

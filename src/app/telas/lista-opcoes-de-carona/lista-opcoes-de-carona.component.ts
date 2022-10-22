import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-opcoes-de-carona',
  templateUrl: './lista-opcoes-de-carona.component.html',
  styleUrls: ['./lista-opcoes-de-carona.component.scss'],
})
export class ListaOpcoesDeCaronaComponent implements OnInit {
  public ajuda = {
    combustivel: {
      ativo: false,
      href: '../../../assets/icon/combustivel-inativo.png'
    },
    estacionamento: {
      ativo: false,
      href: '../../../assets/icon/estacionamento-inativo.png'
    }
  }
  constructor() { }

  ngOnInit() {}

}

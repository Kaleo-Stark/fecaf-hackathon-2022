import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-status-de-carona',
  templateUrl: './lista-status-de-carona.component.html',
  styleUrls: ['./lista-status-de-carona.component.scss'],
})
export class ListaStatusDeCaronaComponent implements OnInit {
  
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

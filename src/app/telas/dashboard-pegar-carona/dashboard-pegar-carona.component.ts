import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-pegar-carona',
  templateUrl: './dashboard-pegar-carona.component.html',
  styleUrls: ['./dashboard-pegar-carona.component.scss'],
})
export class DashboardPegarCaronaComponent implements OnInit {

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

  pausarCarona(){
    //document.getElementById('status-carona').classList;
  }

}

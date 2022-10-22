import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

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
  };

  public dadosPegarCarona = {
    nome: 'Kaleo Vieira Leite',
    ra: '31976',
    cep: '06785-300',
    rua: 'Avenida Ibirama',
    numero: '350',
    cidade: 'Taboão da Serra',
    ajudas: {
      combustivel: false,
      estacionamento: false
    },
    status: 'aguardando'
  };

  constructor() { }

  ngOnInit() {}

  pausarCarona(){
    document.getElementById('status-carona').className = '';

    document.getElementById('status-carona').classList.add('emPausa');

    document.getElementById('status-carona').innerText = 'Carona em pausa';

    //document.getElementById('btn-pausa')['color'] = 'tertiary';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pegar-carona',
  templateUrl: './cadastro-pegar-carona.component.html',
  styleUrls: ['./cadastro-pegar-carona.component.scss'],
})
export class CadastroPegarCaronaComponent implements OnInit {

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

  ativarIcone(tipoAjuda){
    if(tipoAjuda === 'combustivel'){
      this.ajuda.combustivel.ativo = !this.ajuda.combustivel.ativo;

      if(this.ajuda.combustivel.ativo){
        this.ajuda.combustivel.href = '../../../assets/icon/combustivel-ativo.png';
      }else{
        this.ajuda.combustivel.href = '../../../assets/icon/combustivel-inativo.png';
      }
    }else{
      this.ajuda.estacionamento.ativo = !this.ajuda.estacionamento.ativo;

      if(this.ajuda.estacionamento.ativo){
        this.ajuda.estacionamento.href = '../../../assets/icon/estacionamento-ativo.png';
      }else{
        this.ajuda.estacionamento.href = '../../../assets/icon/estacionamento-inativo.png';
      }
    }
  }
}

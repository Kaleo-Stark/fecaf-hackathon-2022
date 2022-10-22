import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cadastro-pegar-carona',
  templateUrl: './cadastro-pegar-carona.component.html',
  styleUrls: ['./cadastro-pegar-carona.component.scss'],
})
export class CadastroPegarCaronaComponent implements OnInit {
  public bloquearProsseguir = true;

  public ajuda = {
    combustivel: {
      href: '../../../assets/icon/combustivel-inativo.png'
    },
    estacionamento: {
      href: '../../../assets/icon/estacionamento-inativo.png'
    }
  };

  public dadosPegarCarona = {
    nome: '',
    ra: '',
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    ajudas: {
      combustivel: false,
      estacionamento: false
    }
  };

  constructor(private router: Router) {}

  async ngOnInit() {}

  ativarIcone(tipoAjuda){
    if(tipoAjuda === 'combustivel'){
      this.dadosPegarCarona.ajudas.combustivel = !this.dadosPegarCarona.ajudas.combustivel;

      if(this.dadosPegarCarona.ajudas.combustivel){
        this.ajuda.combustivel.href = '../../../assets/icon/combustivel-ativo.png';
      }else{
        this.ajuda.combustivel.href = '../../../assets/icon/combustivel-inativo.png';
      }
    }else{
      this.dadosPegarCarona.ajudas.estacionamento = !this.dadosPegarCarona.ajudas.estacionamento;

      if(this.dadosPegarCarona.ajudas.estacionamento){
        this.ajuda.estacionamento.href = '../../../assets/icon/estacionamento-ativo.png';
      }else{
        this.ajuda.estacionamento.href = '../../../assets/icon/estacionamento-inativo.png';
      }
    }
  }

  validadarDados(){
    if(this.dadosPegarCarona.nome && this.dadosPegarCarona.ra && this.dadosPegarCarona.cep &&
      this.dadosPegarCarona.rua && this.dadosPegarCarona.numero && this.dadosPegarCarona.cidade )
    { this.bloquearProsseguir = false;} else
    { this.bloquearProsseguir = true;}
  }

  async irParaDashboardPegarCarona(){
    this.router.navigate(['dashboard-pegar-carona']);
  }
}

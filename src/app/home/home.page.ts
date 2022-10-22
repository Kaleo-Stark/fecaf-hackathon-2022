import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public bloquearButtonProsseguir = true;

  public corButtons = {
    dar: 'primary',
    pegar: 'primary'
  };

  constructor(private router: Router) {}

  selecionouTipoCadastro(tipoCadastro){
    this.corButtonsDefault();
  
    this.corButtons[tipoCadastro] = 'success';

    this.bloquearButtonProsseguir = false;
  }

  corButtonsDefault(){
    this.corButtons.dar = 'primary';

    this.corButtons.pegar = 'primary';
  }

  navegarTelaCadastro(){
    if(this.corButtons.pegar === 'success'){
      this.router.navigate(['cadastro-pegar-carona']);
    }else{
      this.router.navigate(['cadastro-dar-carona']);
    }
  }
}

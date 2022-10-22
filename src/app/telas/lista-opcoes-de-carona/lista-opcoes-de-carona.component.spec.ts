import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaOpcoesDeCaronaComponent } from './lista-opcoes-de-carona.component';

describe('ListaOpcoesDeCaronaComponent', () => {
  let component: ListaOpcoesDeCaronaComponent;
  let fixture: ComponentFixture<ListaOpcoesDeCaronaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOpcoesDeCaronaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaOpcoesDeCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

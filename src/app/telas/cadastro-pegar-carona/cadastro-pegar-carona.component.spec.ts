import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroPegarCaronaComponent } from './cadastro-pegar-carona.component';

describe('CadastroPegarCaronaComponent', () => {
  let component: CadastroPegarCaronaComponent;
  let fixture: ComponentFixture<CadastroPegarCaronaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPegarCaronaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroPegarCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

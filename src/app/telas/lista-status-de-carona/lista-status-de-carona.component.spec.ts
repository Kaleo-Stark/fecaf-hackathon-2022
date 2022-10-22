import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaStatusDeCaronaComponent } from './lista-status-de-carona.component';

describe('ListaStatusDeCaronaComponent', () => {
  let component: ListaStatusDeCaronaComponent;
  let fixture: ComponentFixture<ListaStatusDeCaronaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaStatusDeCaronaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaStatusDeCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

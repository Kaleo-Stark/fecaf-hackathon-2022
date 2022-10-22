import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroDarCaronaComponent } from './cadastro-dar-carona.component';

describe('CadastroDarCaronaComponent', () => {
  let component: CadastroDarCaronaComponent;
  let fixture: ComponentFixture<CadastroDarCaronaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDarCaronaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDarCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

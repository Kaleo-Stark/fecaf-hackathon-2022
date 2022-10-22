import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardPegarCaronaComponent } from './dashboard-pegar-carona.component';

describe('DashboardPegarCaronaComponent', () => {
  let component: DashboardPegarCaronaComponent;
  let fixture: ComponentFixture<DashboardPegarCaronaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPegarCaronaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPegarCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

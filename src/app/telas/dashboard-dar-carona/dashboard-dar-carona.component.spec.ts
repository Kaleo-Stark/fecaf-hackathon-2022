import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardDarCaronaComponent } from './dashboard-dar-carona.component';

describe('DashboardDarCaronaComponent', () => {
  let component: DashboardDarCaronaComponent;
  let fixture: ComponentFixture<DashboardDarCaronaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDarCaronaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDarCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

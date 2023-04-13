import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './map.component';
import { environment } from 'src/environments/environment';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMapboxGLModule.withConfig({
        accessToken: environment.mapboxKey
      })],
      declarations: [ MapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

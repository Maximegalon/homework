import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { firebaseUiAuthConfig } from '../app/app.module'
import { FirebaseUIModule } from 'firebaseui-angular';
import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AngularFireModule, AngularFireModule.initializeApp(environment.firebaseConfig),
        FirebaseUIModule.forRoot(firebaseUiAuthConfig),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // TODO: Update this for logged in/loggged out
  // it(`should have as title 'homework'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Homework Web Site');
  // });

  // TODO: Update this for logged in/loggged out
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.toolbar h1')?.textContent).toContain('Homework Web Site');
  // });
});
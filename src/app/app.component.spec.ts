import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { FirebaseUIModule } from 'firebaseui-angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { firebaseUiAuthConfig } from '../app/app.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const FirestoreStub = {
    collection: () => ({
      doc: () => ({
        valueChanges: () => new BehaviorSubject({ })
      })
    })
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule,
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FirebaseUIModule.forRoot(firebaseUiAuthConfig),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ]
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

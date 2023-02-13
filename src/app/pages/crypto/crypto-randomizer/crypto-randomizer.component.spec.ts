import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CryptoRandomizerComponent } from './crypto-randomizer.component';

describe('CryptoRandomizerComponent', () => {
  let component: CryptoRandomizerComponent;
  let fixture: ComponentFixture<CryptoRandomizerComponent>;
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
        HttpClientTestingModule,
        ProgressSpinnerModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [CryptoRandomizerComponent],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

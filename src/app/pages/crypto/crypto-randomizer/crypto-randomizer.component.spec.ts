import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CryptoRandomizerComponent } from './crypto-randomizer.component';

describe('CryptoRandomizerComponent', () => {
  let component: CryptoRandomizerComponent;
  let fixture: ComponentFixture<CryptoRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ProgressSpinnerModule],
      declarations: [ CryptoRandomizerComponent ]
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

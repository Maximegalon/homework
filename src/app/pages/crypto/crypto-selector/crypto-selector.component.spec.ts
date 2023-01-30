import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule }   from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CryptoSelectorComponent } from './crypto-selector.component';
import { Currency } from 'src/app/interfaces/currency.model';

describe('CryptoSelectorComponent', () => {
  let component: CryptoSelectorComponent;
  let fixture: ComponentFixture<CryptoSelectorComponent>;
  const initialState: Currency[] = []

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, AutoCompleteModule],
      declarations: [ CryptoSelectorComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

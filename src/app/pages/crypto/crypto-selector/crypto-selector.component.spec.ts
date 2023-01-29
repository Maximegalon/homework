import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule }   from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CryptoSelectorComponent } from './crypto-selector.component';

describe('CryptoSelectorComponent', () => {
  let component: CryptoSelectorComponent;
  let fixture: ComponentFixture<CryptoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, AutoCompleteModule],
      declarations: [ CryptoSelectorComponent ]
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

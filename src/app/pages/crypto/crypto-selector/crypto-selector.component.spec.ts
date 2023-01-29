import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSelectorComponent } from './crypto-selector.component';

describe('CryptoSelectorComponent', () => {
  let component: CryptoSelectorComponent;
  let fixture: ComponentFixture<CryptoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

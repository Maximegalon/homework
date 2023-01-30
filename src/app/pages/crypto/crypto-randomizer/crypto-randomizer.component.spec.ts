import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoRandomizerComponent } from './crypto-randomizer.component';

describe('CryptoRandomizerComponent', () => {
  let component: CryptoRandomizerComponent;
  let fixture: ComponentFixture<CryptoRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

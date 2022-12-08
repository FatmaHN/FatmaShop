import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoamnclothesComponent } from './woamnclothes.component';

describe('WoamnclothesComponent', () => {
  let component: WoamnclothesComponent;
  let fixture: ComponentFixture<WoamnclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoamnclothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoamnclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

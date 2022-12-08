import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenequipmentComponent } from './kitchenequipment.component';

describe('KitchenequipmentComponent', () => {
  let component: KitchenequipmentComponent;
  let fixture: ComponentFixture<KitchenequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenequipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

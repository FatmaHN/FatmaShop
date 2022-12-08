import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfashionComponent } from './manfashion.component';

describe('ManfashionComponent', () => {
  let component: ManfashionComponent;
  let fixture: ComponentFixture<ManfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManfashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

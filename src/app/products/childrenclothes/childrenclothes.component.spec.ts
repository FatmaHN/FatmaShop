import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenclothesComponent } from './childrenclothes.component';

describe('ChildrenclothesComponent', () => {
  let component: ChildrenclothesComponent;
  let fixture: ComponentFixture<ChildrenclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenclothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

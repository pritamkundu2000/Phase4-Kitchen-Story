import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcereComponent } from './addcere.component';

describe('AddcereComponent', () => {
  let component: AddcereComponent;
  let fixture: ComponentFixture<AddcereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

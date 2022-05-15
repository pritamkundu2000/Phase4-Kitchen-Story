import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutComponent } from './nut.component';

describe('NutComponent', () => {
  let component: NutComponent;
  let fixture: ComponentFixture<NutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

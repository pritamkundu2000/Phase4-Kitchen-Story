import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfruitsComponent } from './addfruits.component';

describe('AddfruitsComponent', () => {
  let component: AddfruitsComponent;
  let fixture: ComponentFixture<AddfruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfooditemsComponent } from './sfooditems.component';

describe('SfooditemsComponent', () => {
  let component: SfooditemsComponent;
  let fixture: ComponentFixture<SfooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfooditemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

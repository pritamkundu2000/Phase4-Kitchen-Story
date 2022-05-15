import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NheaderComponent } from './nheader.component';

describe('NheaderComponent', () => {
  let component: NheaderComponent;
  let fixture: ComponentFixture<NheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

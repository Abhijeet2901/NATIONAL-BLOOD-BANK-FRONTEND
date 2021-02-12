import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwdonorComponent } from './veiwdonor.component';

describe('VeiwdonorComponent', () => {
  let component: VeiwdonorComponent;
  let fixture: ComponentFixture<VeiwdonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwdonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

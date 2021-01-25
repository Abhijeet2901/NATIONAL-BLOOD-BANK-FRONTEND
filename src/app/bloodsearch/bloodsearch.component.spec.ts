import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodsearchComponent } from './bloodsearch.component';

describe('BloodsearchComponent', () => {
  let component: BloodsearchComponent;
  let fixture: ComponentFixture<BloodsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

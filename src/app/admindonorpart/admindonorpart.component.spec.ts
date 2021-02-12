import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindonorpartComponent } from './admindonorpart.component';

describe('AdmindonorpartComponent', () => {
  let component: AdmindonorpartComponent;
  let fixture: ComponentFixture<AdmindonorpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindonorpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindonorpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

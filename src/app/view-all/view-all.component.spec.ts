import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewALLComponent } from './view-all.component';

describe('ViewALLComponent', () => {
  let component: ViewALLComponent;
  let fixture: ComponentFixture<ViewALLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewALLComponent]
    });
    fixture = TestBed.createComponent(ViewALLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

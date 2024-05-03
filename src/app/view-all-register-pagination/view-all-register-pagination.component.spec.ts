import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRegisterPaginationComponent } from './view-all-register-pagination.component';

describe('ViewAllRegisterPaginationComponent', () => {
  let component: ViewAllRegisterPaginationComponent;
  let fixture: ComponentFixture<ViewAllRegisterPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllRegisterPaginationComponent]
    });
    fixture = TestBed.createComponent(ViewAllRegisterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

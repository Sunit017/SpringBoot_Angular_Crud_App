import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployessComponent } from './view-employess.component';

describe('ViewEmployessComponent', () => {
  let component: ViewEmployessComponent;
  let fixture: ComponentFixture<ViewEmployessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployessComponent]
    });
    fixture = TestBed.createComponent(ViewEmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

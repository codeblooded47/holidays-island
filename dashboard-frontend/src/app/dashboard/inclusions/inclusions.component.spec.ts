import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InclusionsComponent } from './inclusions.component';

describe('InclusionsComponent', () => {
  let component: InclusionsComponent;
  let fixture: ComponentFixture<InclusionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

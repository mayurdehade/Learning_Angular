import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompComponent } from './directive-comp.component';

describe('DirectiveCompComponent', () => {
  let component: DirectiveCompComponent;
  let fixture: ComponentFixture<DirectiveCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveCompComponent]
    });
    fixture = TestBed.createComponent(DirectiveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

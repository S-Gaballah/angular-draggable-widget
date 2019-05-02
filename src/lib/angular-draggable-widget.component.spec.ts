import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDraggableWidgetComponent } from './angular-draggable-widget.component';

describe('AngularDraggableWidgetComponent', () => {
  let component: AngularDraggableWidgetComponent;
  let fixture: ComponentFixture<AngularDraggableWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDraggableWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDraggableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

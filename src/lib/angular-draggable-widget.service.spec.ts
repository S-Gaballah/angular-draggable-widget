import { TestBed } from '@angular/core/testing';

import { AngularDraggableWidgetService } from './angular-draggable-widget.service';

describe('AngularDraggableWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDraggableWidgetService = TestBed.get(AngularDraggableWidgetService);
    expect(service).toBeTruthy();
  });
});

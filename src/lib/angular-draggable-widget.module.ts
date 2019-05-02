import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { AngularDraggableWidgetComponent } from './angular-draggable-widget.component';
import {MatTooltipModule} from "@angular/material";

@NgModule({
  declarations: [AngularDraggableWidgetComponent],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DragDropModule,
    CommonModule,
    MatTooltipModule
  ],
  exports: [AngularDraggableWidgetComponent]
})
export class AngularDraggableWidgetModule { }

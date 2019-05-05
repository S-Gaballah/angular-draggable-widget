# Angular Draggable Widget

angular-draggable-widget is a tiny library to add multible draggable widgets to your angular application.

![alt text](src/assets/sample.gif "Draggable Widget")

## Installation

### node

```console
npm install angular-draggable-widget
```

### yarn

```console
yarn add angular-draggable-widget
```

### SystemJs

add to systemjs.config.js

``` js
'angular-draggable-widget': 'node_modules/angular-draggable-widget/bundles/draggable-widget.umd.min.js',
```

## Usage


Import `AngularDraggableWidgetModule` in your `AppModule`

``` typescript
import { AngularDraggableWidgetModule } from 'angular-draggable-widget';

@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule,
      AngularDraggableWidgetModule
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

and then in `html` template

```html
<draggable-widget
   [isOpened]="true"
   [isDraggable]="true"
   [isMinimizable]="false"
   title="my widget title"
   xPosition="25px"
   yPosition="50px"
   [zIndex]="2"
   iconImageSrc="../assets/logo.png">
    Add your widget content here
  </draggable-widget>
```

| property        | desc           | default value  | type |
| :-------------|----------------------- | -----| -----
| isOpened      | show/hide widget         | false| boolean|
| isDraggable   | Enable/disable drag      | true |boolean|
| isMinimizable | minimize/maximize widget | true |boolean|
| title         | widget title             | Title| string|
| xPosition     | inital top position in px or %     | dynamic | string|
| yPosition     | inital left position in px or %    | dynamic | string|
| zIndex        | widget order between other widgets | dynamic| number|
| iconImageSrc  | widget icon image path             | | string|
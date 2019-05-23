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

>add to `systemjs.config.js`

``` js
'angular-draggable-widget': 'node_modules/angular-draggable-widget/bundles/angular-draggable-widget.umd.min.js',
```

## Usage

>Import `AngularDraggableWidgetModule` in your `AppModule`

``` ts
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

>and then in `html` template

```html
<draggable-widget
   [isOpened]="true"
   [isDraggable]="true"
   [isMinimizable]="false"
   title="my widget title"
   xPosition="25px"
   yPosition="50px"
   [zIndex]="2"
   iconImageSrc="../assets/logo.png"
   (onClose)="isOpened = false">
    Add your widget content here
  </draggable-widget>
```

## Events, properties, and styling

### Events

| Event            | Description                              |
|:-----------------|------------------------------------------|
| onOpen           | when the widget opened                   |
| onClose          | when the sidget closed                   |
| onMinimize       | when the widget minimized                |
| onDragStart      | when widget drag starts                  |
| onDragEnd        | when widget drag stops                   |
| onDragMoved      | while the widget is dragging             |
| onDragReleased   | when the widget drag has released        |
| onWidgetDClicked | when the minimized widget double clicked |

### Properties

| Property      | Description                        | Default value | type    |
|:--------------|------------------------------------|---------------|---------|
| isOpened      | show/hide widget                   | false         | boolean |
| isDraggable   | Enable/disable drag                | true          | boolean |
| isMinimizable | minimize/maximize widget           | true          | boolean |
| title         | widget title                       | Title         | string  |
| xPosition     | inital top position in px or %     | dynamic       | string  |
| yPosition     | inital left position in px or %    | dynamic       | string  |
| zIndex        | widget order between other widgets | dynamic       | number  |
| iconImageSrc  | widget icon image path             |               | string  |

### Styling

> do not forget to import material theme to your `style.css`.

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

> you can override the css classes to theme your widget.

| css class          | Description                           |
|:-------------------|---------------------------------------|
| widget             | widget active class                   |
| header             | widget header                         |
| title              | widget title                          |
| image              | header icom image                     |
| widgetMinimized    | active when the widget minimized      |
| widgetAsIcon       | thw widget icon when minimized        |
| widgetAsIcon > img | to style the image inside widget icon |


### Small screens

> use media query to override widget styling on small screens

```css
@media only screen and (max-width:600px) {
    .widget {
        bottom: 0px ;
        width: 100% ;
    }
}
```

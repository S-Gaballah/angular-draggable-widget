import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: 'draggable-widget',
  templateUrl: `./angular-draggable-widget.component.html`,
  styleUrls: ["./widget.css"]
})
export class AngularDraggableWidgetComponent implements OnChanges, OnInit {

  @Output() onOpen = new EventEmitter();
  @Output() onClose = new EventEmitter();
  @Output() onDragStart = new EventEmitter();
  @Output() onDragEnd = new EventEmitter();
  @Output() onDragMoved = new EventEmitter();
  @Output() onDragExited = new EventEmitter();
  @Output() onDragReleased = new EventEmitter();
  @Output() onImageDClicked = new EventEmitter();


  @Input() isOpened: boolean = false;
  @Input() isDraggable: boolean = true;
  @Input() isMinimizable: boolean = true;
  @Input() title: string = "Title";
  @Input() xPosition?: string;
  @Input() yPosition?: string;
  @Input() zIndex?: number;
  @Input() iconImageSrc?: string;

  safeIconImageSrc
  isMinimized = false;
  isSmallScreen = false;

  constructor(breakpointObserver: BreakpointObserver,
    private sanitizer: DomSanitizer, ) {
    breakpointObserver.observe([
      '(max-width: 600px)',
      Breakpoints.XSmall,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints['(max-width: 600px)']) {
          this.isSmallScreen = true;
        }
        else
          this.isSmallScreen = false;
      }
    });
  }

  ngOnInit() {
    // this.isOpened = this.isOpened == true ? true : false,
    
    //   this.isDraggable = this.isDraggable == true ? true : false,
    //   // isOpened: (this.config.isOpened == true || this.config.isOpened == undefined) ? true : false,
    //   title: this.config.title || "Title",
    //   isMinimizable: (this.config.isMinimizable == true || this.config.isMinimizable == undefined) ? true : false
    // });
    
    this.safeIconImageSrc = this.iconImageSrc && this.sanitizer.bypassSecurityTrustResourceUrl(this.iconImageSrc)
  }

  ngOnChanges(event: SimpleChanges) {
    if (this.isOpened) {
      let widgets: HTMLCollectionOf<Element> = document.getElementsByClassName("widget");
      if (event.isOpened.currentValue == true) {
        this.zIndex = this.zIndex || widgets.length;
        this.yPosition = this.yPosition || `${Math.floor(Math.random() * 40) + 20}%`;
        this.xPosition = this.xPosition || `${Math.floor(Math.random() * 30) + 15}%`;
        this.onOpen.emit();
      }
    }
  }

  dragStart() {
    this.onDragStart.emit();
  }

  dragEnd() {
    this.onDragEnd.emit();
  }

  dragMoved() {
    this.onDragMoved.emit();
  }

  imageDClicked() {
    this.isMinimized = !this.isMinimized;
    this.onImageDClicked.emit();
  }

  dragExited() {
    this.onDragExited.emit();
  }

  dragReleased() {
    this.onDragReleased.emit();
  }

  close(event) {
    this.isOpened = false;
    this.onClose.emit(event);
  }
}

// export interface WidgetConfig {
//   isOpened?: boolean;
//   isDraggable?: boolean;
//   isMinimizable?: boolean;
//   title?: string;
//   xPosition?: string;
//   yPosition?: string;
//   zIndex?: number;
//   iconImageSrc?: string;
// }

import { Directive, HostBinding, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {
  @Input() highlighted: boolean = false;

  constructor() {
    console.log('Directive created');
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  @Output() toggleHighlight = new EventEmitter<boolean>();

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.highlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver($event) {
    this.highlighted = true;
    this.toggleHighlight.emit(this.highlighted);
    console.log('Mouse over', $event);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave($event) {
    this.highlighted = false;
    this.toggleHighlight.emit(this.highlighted);

  }
}

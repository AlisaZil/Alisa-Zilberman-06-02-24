import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() buttonLinkClick = new EventEmitter<MouseEvent>();
  @Output() toggleLinkClick = new EventEmitter<{value:boolean, name:string}>();

  handleButtonLinkClick(e:MouseEvent) {
    this.buttonLinkClick.emit(e);
  }

  handleToggleClick(value: boolean, name: string) {
    this.toggleLinkClick.emit({ value: value, name: name });
  }
}

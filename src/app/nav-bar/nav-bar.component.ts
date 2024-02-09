import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() buttonLinkClick = new EventEmitter<MouseEvent>();

  handleButtonLinkClick(e:MouseEvent) {
    this.buttonLinkClick.emit(e);
  }
}

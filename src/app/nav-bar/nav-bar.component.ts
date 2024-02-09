import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Input() isNavbarOpen: boolean = false;

  @Output() buttonLinkClick = new EventEmitter<MouseEvent>();
  @Output() toggleLinkClick = new EventEmitter<{ value: boolean, name: string }>();
  
  public currSelectedButtonLink: string = 'Main';

  handleButtonLinkClick(e: MouseEvent) {

    let buttonLinkValue = (e.target as HTMLParagraphElement).textContent;

    if (buttonLinkValue) {
      this.currSelectedButtonLink = String(buttonLinkValue);
    }

    this.buttonLinkClick.emit(e);

  }

  handleToggleClick(value: boolean, name: string) {
    this.toggleLinkClick.emit({ value: value, name: name });
  }
}

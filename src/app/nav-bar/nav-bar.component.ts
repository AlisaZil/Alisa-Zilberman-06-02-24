import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Input() isNavbarOpen: boolean = false;

  @Output() buttonLinkClick = new EventEmitter<string>();
  @Output() NavBarClickOutside = new EventEmitter<boolean>();
  @Output() toggleLinkClick = new EventEmitter<{ value: boolean, name: string }>();
  
  public currSelectedButtonLink: string = 'Main';

  handleButtonLinkClick(name: string) {

    this.currSelectedButtonLink = name;
    this.buttonLinkClick.emit(name);

  }

  handleToggleClick(value: boolean, name: string) {
    this.toggleLinkClick.emit({ value: value, name: name });
  }

  clickOutside(e: void) {
    this.NavBarClickOutside.emit();
  }
}

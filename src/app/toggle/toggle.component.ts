import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  toggleStatus: boolean = false;
  @Output() toggleClick = new EventEmitter<boolean>();


  handleToggleClick(e: MouseEvent) {

    this.toggleStatus = !this.toggleStatus;
    this.toggleClick.emit(this.toggleStatus);

  }
}

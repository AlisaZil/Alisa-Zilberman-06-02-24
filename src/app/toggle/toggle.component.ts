import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  
  @Input() label?: string;
  @Output() toggleClick = new EventEmitter<boolean>();

  public toggleStatus: boolean = false;
  
  handleToggleClick(e: MouseEvent) {

    this.toggleStatus = !this.toggleStatus;
    this.toggleClick.emit(this.toggleStatus);

  }
}

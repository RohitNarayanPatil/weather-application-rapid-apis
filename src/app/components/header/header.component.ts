import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
    standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    @Input() isCollapsed = false;   
  @Output() toggle = new EventEmitter<void>(); // Event to parent

  onToggleSidebar() {
    this.toggle.emit(); // Emit event when button clicked
  }
}

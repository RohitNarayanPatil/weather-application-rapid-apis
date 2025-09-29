import { Component ,HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
 isOpen = false;        // Controls mobile toggle
  isDesktop = window.innerWidth >= 768; // Detect desktop

  // ✅ Detect screen resize (desktop vs mobile)
  @HostListener('window:resize', [])
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop) {
      this.isOpen = false; // Reset toggle state on desktop
    }
  }

  toggleSidebar() {
    if (!this.isDesktop) {
      this.isOpen = !this.isOpen; // true toggle
    }
  }

   closeSidebar() {
    if (!this.isDesktop) {
      this.isOpen = false; 
    }
  }
  handleMenuClick() {
    // Auto close only on mobile
    if (!this.isDesktop) {
      this.isOpen = false;
    }
  }

  
}

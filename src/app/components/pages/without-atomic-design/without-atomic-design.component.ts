import { Component } from '@angular/core';

@Component({
  selector: 'app-without-atomic-design',
  templateUrl: './without-atomic-design.component.html',
  styleUrls: ['./without-atomic-design.component.scss']
})
export class WithoutAtomicDesignComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAtomicPage() {
    this.router.navigate(['home/with-atomic-design']);
  }

  goToWithoutAtomicPage() {
    this.router.navigate(['home/without-atomic-design']);
  }
}

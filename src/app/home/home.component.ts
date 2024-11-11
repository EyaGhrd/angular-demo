import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userName: string = 'Guest';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.userName = navigation?.extras.state?.['userName'] || 'Guest';
  }

  exploreMore() {
    alert('Explore More functionality coming soon!');
  }

  logOut() {
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  name: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.name) {
      this.router.navigate(['/'], { state: { userName: this.name } });
    } else {
      alert('Please enter your name!');
    }
  }  
}

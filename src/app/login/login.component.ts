import { Component  } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  constructor( public auth: AuthService, private router: Router ) {}

  ngOnInit(): void {
     this.auth.isAuthenticated$.subscribe(isAuthenticated => {
       if (isAuthenticated) { 
        this.router.navigate(['/home']);
       } 
    });
  }

  login() { 
    this.auth.loginWithRedirect(); 
  }

}

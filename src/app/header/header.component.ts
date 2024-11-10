import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {  AuthModule, AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports:[RouterLink,AuthModule]
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {} 
  
  ngOnInit() { 
    this.auth.isAuthenticated$.subscribe(isAuthenticated => 
      { if (!isAuthenticated) 
        { 
          this.router.navigate(['/login']); 
        } }); 
  } 
  
  logout() { 
    this.auth.logout({ 
      logoutParams: { returnTo: window.location.origin } });
  }

}


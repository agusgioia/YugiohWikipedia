import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0} from '@auth0/auth0-angular';


bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-ev2qgw4if8es6e02.us.auth0.com',
      clientId: 'cIPJWiQo76lyGuoVdd4sCcWw48cK4lPv',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideHttpClient()
  ]
}).catch(err=>console.error(err));


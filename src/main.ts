import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0} from '@auth0/auth0-angular';
import { initializeApp } from "firebase/app";
import { provideFirebaseApp } from '@angular/fire/app';
const firebaseConfig = {

  apiKey: "AIzaSyDlMmWY9vFEhB1sdKTRfNgpprBvrLoALq0",

  authDomain: "artitectura-web.firebaseapp.com",

  projectId: "artitectura-web",

  storageBucket: "artitectura-web.firebasestorage.app",

  messagingSenderId: "685712598634",

  appId: "1:685712598634:web:6da02c385d9949c43fcc13"

};
const app = initializeApp(firebaseConfig)
bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-oq2qwg67nvfwkcle.us.auth0.com',
      clientId: 'cnmrO1vh7wdBZGgu5xizlyBIqTANM4Oy',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideHttpClient(),
    provideFirebaseApp(()=>initializeApp())
  ]
}).catch(err=>console.error(err));


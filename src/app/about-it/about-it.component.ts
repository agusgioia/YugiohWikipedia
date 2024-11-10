import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-it',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about-it.component.html',
  styleUrl: './about-it.component.css'
})
export class AboutItComponent {

}

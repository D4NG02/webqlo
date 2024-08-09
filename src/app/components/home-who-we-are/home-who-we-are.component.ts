import { Component } from '@angular/core';

@Component({
  selector: 'app-home-who-we-are',
  standalone: true,
  imports: [],
  templateUrl: './home-who-we-are.component.html',
  styleUrl: './home-who-we-are.component.css'
})
export class HomeWhoWeAreComponent {
  title: string = 'who we are'
  description: string = "We're a full-fledged, data-driven digital marketing agency in Malaysia that can meet your business needs through creativity backed with insights."
  button: { text: string, href: string } = {
    text: 'Discover More',
    href: 'who-we-are'
  }
}

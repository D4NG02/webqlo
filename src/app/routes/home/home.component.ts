import { Component } from '@angular/core';
import { AppNavbar } from '../../components/navbar/navbar.component';
import { HomeBannerComponent } from '../../components/home-banner/home-banner.component';
import { HomeWhatWeDoComponent } from '../../components/home-what-we-do/home-what-we-do.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppNavbar, HomeBannerComponent, HomeWhatWeDoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

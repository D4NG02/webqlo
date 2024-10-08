import { Component } from "@angular/core"
import { NgOptimizedImage } from '@angular/common'

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class AppNavbar {
  logoUrl = "https://www.webqlo.com/images/webqlo.webp"
}
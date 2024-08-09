import { Component } from '@angular/core';
import { AppNavbar } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-headlines',
  standalone: true,
  imports: [AppNavbar],
  templateUrl: './headlines.component.html',
  styleUrl: './headlines.component.css'
})
export class HeadlinesComponent {

}

import { Component,  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home, card-overview-example', 
  standalone: true,
  imports: [MatCardModule, RouterOutlet, RouterModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
export class CardOverviewExample {
  
}

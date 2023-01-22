import { Component ,ViewChild} from '@angular/core';
import { RadioComponent } from './radio/radio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RadioComponent]
})
export class AppComponent {
  title = 'assign3';
 



}

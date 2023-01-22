import { Component, Directive, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChildComponent]
  
})
export class AppComponent {
  title = 'assign2';
  @ViewChild(ChildComponent, { static: true })
  child!: ChildComponent;
 
}

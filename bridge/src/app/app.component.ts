import {Component} from '@angular/core';
import {Remote} from "./classes/remote";
import {TV} from "./classes/tv";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bridge';

  public tv: TV;
  public tvRemote: Remote;

  constructor() {
    this.tv = new TV(1,0,false);
    this.tvRemote = new Remote(this.tv);
  }

}

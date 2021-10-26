import {Component, OnInit} from '@angular/core';
import {Singleton} from "./classes/singleton";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'singleton';

  ngOnInit(): void {
    let singleton = Singleton.instance;

    let singleton2 = Singleton.instance;

    console.log('singleton: we are the same, aren\'t we?');
    if (singleton === singleton2) {
      console.log('singleton2: yes, we are!');
    } else {
      console.log('singleton2: no, we are not!');
    }

    singleton.getInstanceAddress();
  }

}

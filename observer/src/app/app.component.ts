import {Component, OnInit} from '@angular/core';
import {ConcreteObserverA} from "./classes/concrete-observer-a";
import {ConcreteObserverB} from "./classes/concrete-observer-b";
import {ConcreteSubject} from "./classes/concrete-subject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observer';

  ngOnInit(): void {
    const subject = new ConcreteSubject();

    const observerA = new ConcreteObserverA();
    subject.attach(observerA);

    const observerB = new ConcreteObserverB();
    subject.attach(observerB);

    for (let i = 0; i < 5; i++) {
      subject.doSomeBusinessLogic();
    }

    subject.detach(observerB);

    for (let i = 0; i < 5; i++) {
      subject.doSomeBusinessLogic();
    }

    subject.attach(observerA);
    subject.detach(observerB);
  }

}

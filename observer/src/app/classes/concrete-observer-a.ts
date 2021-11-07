import {Observer} from "../interfaces/observer";
import {Subject} from "../interfaces/subject";
import {ConcreteSubject} from "./concrete-subject";

export class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ObserverA reacted to this event');
    }
  }

}

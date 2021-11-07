import {Observer} from "../interfaces/observer";
import {Subject} from "../interfaces/subject";
import {ConcreteSubject} from "./concrete-subject";

export class ConcreteObserverB implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state > 2)) {
      console.log('ObserverB reacted to this event');
    }
  }

}

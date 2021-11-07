import {Observer} from "../interfaces/observer";
import {Subject} from "../interfaces/subject";

export class ConcreteSubject implements Subject {
  public state: number = 0;

  private observers: Observer[] = [];

  attach(observer: Observer): void {
    const doesExist = this.observers.includes(observer);

    if (doesExist) {
      console.log('\nSubject: the observer has been already attached into the observers list ', observer);
      return;
    }

    console.log('Attached an observer: ', observer);
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index === -1) {
      console.log('\nSubject: the observer is not included into the observers list ', observer);
      return;
    }

    console.log('\nDetached an observer: ', observer);
    this.observers.splice(index, 1);
  }

  notify(): void {
    console.log('Notifying observers');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  doSomeBusinessLogic(): void {
    console.log('\nSubject: I\'m doing some important job');
    this.state = Math.floor(Math.random() * 10);

    console.log('Subject: my state has just changed to: ', this.state);
    this.notify();
  }
}

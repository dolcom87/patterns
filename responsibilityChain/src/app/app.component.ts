import {Component, OnInit} from '@angular/core';
import {Handler} from "./interfaces/handler";
import {MonkeyHandler} from "./classes/monkey-handler";
import {SquirrelHandler} from "./classes/squirrel-handler";
import {DogHandler} from "./classes/dog-handler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'responsibilityChain';

  /**
   * Обычно клиентский код приспособлен для работы с единственным обработчиком. В
   * большинстве случаев клиенту даже неизвестно, что этот обработчик является
   * частью цепочки.
   */
  private clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
      console.log(`Client: who wants a ${food}?`);

      const result = handler.handle(food);
      if (result) {
        console.log(`   ${result}`);
      } else {
        console.log(`   ${food} was left untouched.`);
      }
    }
  }

  /**
   * Другая часть клиентского кода создает саму цепочку.
   */
  ngOnInit(): void {
    const monkey = new MonkeyHandler();
    const squirrel = new SquirrelHandler();
    const dog = new DogHandler();

    monkey.setNext(squirrel).setNext(dog);

    /**
     * Клиент должен иметь возможность отправлять запрос любому обработчику, а не
     * только первому в цепочке.
     */

    console.log('Chain: Monkey > Squirrel > Dog\n\n');
    this.clientCode(monkey);
    console.log('');

    console.log('Subchain: Squirrel > Dog\n\n');
    this.clientCode(squirrel);
    console.log('');

    console.log('Subchain: The only Dog\n\n');
    this.clientCode(dog);
  }

}

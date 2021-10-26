import {AbstractHandler} from "./abstract-handler";

/**
 * Все Конкретные Обработчики либо обрабатывают запрос, либо передают его следующему обработчику в цепочке.
 */
export class MonkeyHandler extends AbstractHandler {

  handle(request: string): string | null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

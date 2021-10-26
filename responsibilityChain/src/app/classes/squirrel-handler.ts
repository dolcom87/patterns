import {AbstractHandler} from "./abstract-handler";

/**
 * Все Конкретные Обработчики либо обрабатывают запрос, либо передают его следующему обработчику в цепочке.
 */
export class SquirrelHandler extends AbstractHandler {

  handle(request: string): string | null {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

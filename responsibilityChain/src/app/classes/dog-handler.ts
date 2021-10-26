import {AbstractHandler} from "./abstract-handler";

/**
 * Все Конкретные Обработчики либо обрабатывают запрос, либо передают его следующему обработчику в цепочке.
 */
export class DogHandler extends AbstractHandler {

  handle(request: string): string | null {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

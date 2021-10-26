/**
 * Поведение цепочки по умолчанию может быть реализовано внутри базового класса обработчика.
 */
import {Handler} from "../interfaces/handler";

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Возврат обработчика отсюда позволит связать обработчики простым способом, вот так:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

}

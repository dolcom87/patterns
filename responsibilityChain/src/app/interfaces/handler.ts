/**
 * Интерфейс Обработчика объявляет метод построения цепочки обработчиков. Он также объявляет метод для выполнения
 * запроса.
 */
export interface Handler {
  setNext(handler: Handler): Handler | null;

  handle(request: string): string | null;
}

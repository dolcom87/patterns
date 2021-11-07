import {Observer} from "./observer";

export interface Subject {
  /**
   * Добавляет подписчика (наблюдателя) в список
   * @param observer - подписчик
   */
  attach(observer: Observer): void;

  /**
   * Удаляет подписчика из списка
   * @param observer - подписчик
   */
  detach(observer: Observer): void;

  /** Уведомляет подписчиков об изменениях */
  notify(): void;
}

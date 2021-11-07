import {Subject} from "./subject";

export interface Observer {
  /**
   * Обновляет информацию о состоянии издателя (оповещателя)
   * @param subject - издатель
   */
  update(subject: Subject): void;
}

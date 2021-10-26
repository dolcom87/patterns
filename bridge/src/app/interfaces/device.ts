export interface Device {
  /** Возвращает канал */
  getChannel(): number;

  /**
   * Устанавливает канал
   * @param channel - число - номер канала
   */
  setChannel(channel: number): void;

  /** Увеличивает номер канала */
  channelUp(): void;

  /** Уменьшает номер канала */
  channelDown(): void;

  /** Возвращает уровень громкости */
  getVolume(): number;

  /** Увеличивает уровень громкости */
  volumeUp(): void;

  /** Уменьшает уровень громкости */
  volumeDown(): void;

  /** Включает устройство */
  powerOn(): void;

  /** Выключает устройство */
  powerOff(): void;

  /** Проверяет если устройство включено */
  isOn(): boolean;
}

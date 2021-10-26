import {Device} from "../interfaces/device";

export class TV implements Device {
  private channel: number;
  private volume: number;
  private isEnabled: boolean;

  constructor(channel: number, volume: number, isEnabled: boolean) {
    this.channel = channel;
    this.volume = volume;
    this.isEnabled = isEnabled;
  }

  channelDown(): void {
    this.channel--;
  }

  channelUp(): void {
    this.channel++;
  }

  getChannel(): number {
    return this.channel;
  }

  getVolume(): number {
    return this.volume;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }

  volumeDown(): void {
    if (this.volume > 0) {
      this.volume -= 10;
    }
  }

  volumeUp(): void {
    this.volume += 10;
  }

  isOn(): boolean {
    return this.isEnabled;
  }

  powerOff(): void {
    this.isEnabled = false;
  }

  powerOn(): void {
    this.isEnabled = true;
  }

}

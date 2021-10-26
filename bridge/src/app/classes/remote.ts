import {Device} from "../interfaces/device";

export class Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public togglePower(): void {
    if (this.device.isOn()) {
      this.device.powerOff();
    } else {
      this.device.powerOn();
    }

    console.log('The device is ' + (this.device.isOn() ? 'on' : 'off'));
  }

  public volumeUp(): void {
    this.device.volumeUp();
    console.log(`volume gets up to: ${this.device.getVolume()}`)
  }

  public volumeDown(): void {
    this.device.volumeDown();
    console.log(`volume gets down to: ${this.device.getVolume()}`)
  }
}

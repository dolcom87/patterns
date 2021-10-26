export class Singleton {
  private static _instance: Singleton;

  private constructor() {}

  public static get instance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }

    return this._instance;
  }

  public getInstanceAddress() {
    console.log('Hi, I\'m a singleton instance and my name is: ', Singleton.name);
  }
}

type Clazz<T> = new (...args: unknown[]) => T;

export default class DuplicateResourceError<T> extends Error {
  public identifier: string;
  constructor(public clazz: Clazz<T>, public identifer: string) {
    super();
    this.message = `A ${this.clazz.name} already exists with identifier = ${this.identifer}`;
  }
}

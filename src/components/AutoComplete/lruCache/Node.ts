export class Node<T> {
  key: string;
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

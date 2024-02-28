// 物件的型別 interface
// 物件的規格書

interface OBJ {
  name: string;
  age: number;
}

const obj1: OBJ = { name: 'hank', age: 123 };

// interface 當成 class 的規格使用(需被 implements)

// 通常介面名命使用大寫 I 開頭
interface IAnimal {
  // 定義屬性：
  id: string;
  name: string;
  age: number;
  // 定義方法：
  walk(speed?: number): void;
  makeSound(): boolean;
}

// 實作介面
class Animal implements IAnimal {
  id: string;
  name: string;
  age: number;
  speed: number = 0;
  constructor(id: string, name: string, age: number, speed: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.speed = speed;
  }
  // 實作 walk 方法
  walk(speed?: number) {
    typeof speed === 'number' && (this.speed = speed);
    console.log(`${this.name} walking speed = ${speed}`);
  }
  // 實作 makeSound 方法
  makeSound() {
    if (this.speed > 10) {
      return true;
    } else {
      return false;
    }
  }
}

const animal = new Animal('id1', 'juby', 10, 20);
console.log('animal:', animal);
animal.walk(2);
console.log('makeSound:', animal.makeSound());

// 介面可以繼承介面
class Point {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

// 一個類別可以實現多個介面：(用逗號隔開)
interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}

export {};

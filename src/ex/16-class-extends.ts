// -------- 繼承類別 --------

class Animal2 {
  name: string
  run() {
    console.log('animal run');
  }
}

class Dog2 extends Animal2 {
  run() {
    console.log('dog run');
  }
}

class Cat2 extends Animal2 {

}

const d1 = new Dog2();
d1.run();
const c1 = new Cat2();
c1.run();
// -------- extend --------

class Animal2 {
  name: string;
  run() {
    console.log('animal2 run');
  }
}

class Dog2 extends Animal2 {
  run() {
    console.log('dog2 run');
  }
}

const d2 = new Dog2();
d2.run();

// -------- constructor & super --------
class Animal3 {
  name: string;
  constructor(name: string) {
    console.log('Animal3 constructor');
    this.name = name;
  }
  run() {
    console.log('animal3 run');
  }
}

class Dog3 extends Animal3 {
  // 注意：子類別如果沒寫 constructor 會直接呼叫父層的 constructor

  // override 父層的 constructor
  constructor(name: string) {
    super(name); // 一定要呼叫 super 否則 ts 會報錯
  }
  run() {
    super.run(); // 呼叫父層的方法
    console.log(`${this.name} run`);
  }
}

const d3 = new Dog3('juby3');
d3.run();
// console.log('dog3:', d3);

// -------- abstract --------
// 抽像類別只能被繼承不可被 new 實體。
// 抽像方法只能在抽像類別中。
// 繼承抽像類別的子類別，需實作父類別的抽像方法。
// 抽像類別可以實作方法和抽像方法，而介面只能定義方法(空的)。

abstract class Animal4 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    // 抽像類別可直接實作方法，但 interface 不行。
    console.log('animal3 run');
  }
  abstract walk(): void; // 抽像方法需被子類別繼承且實作
}

class Dog4 extends Animal4 {
  constructor(name: string) {
    super(name); // 一定要呼叫 super 否則 ts 會報錯
  }
  run() {
    console.log(`${this.name} run`);
  }
  walk() {
    console.log(`${this.name} walk`);
  }
}

const d4 = new Dog4('juby4');
d4.walk();

export {};

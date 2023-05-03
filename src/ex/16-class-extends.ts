// -------- 繼承類別 --------

// extend
class Animal2 {
  name: string
  run() {
    console.log('animal2 run');
  }
}

class Dog2 extends Animal2 {
  run() {
    console.log('dog2 run');
  }
}

const d2= new Dog2();
d2.run();

// constructor & super
class Animal3 {
  name: string
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
    super(name) // 一定要呼叫 super 否則 ts 會報錯
  }
  run() {
    super.run(); // 呼叫父層的方法
    console.log(`${this.name} run`);
  }
}

const d3 = new Dog3('juby3');
d3.run();
// console.log('dog3:', d3);
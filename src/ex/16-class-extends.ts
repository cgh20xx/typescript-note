// -------- extend --------

class Animal2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run() {
    console.log('animal2 run');
  }
}

class Dog2 extends Animal2 {
  run() {
    console.log('dog2 run');
  }
}

const d2 = new Dog2('juby2');
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

// -------- 覆寫方法注意事項 --------
// 與 js 不同，ts 覆寫方法有以下限制：
// 1. 子類別覆寫父類別的方法，方法參數型別需一樣，但參數數量可以不一樣。
// 2. 子類別覆寫父類別的方法，方法的返回值型別需一樣。
//
class GradeCounter {
  countGrades(grades: string[], letter: string) {
    return grades.filter((grade) => grade === letter).length;
  }
}

// 錯誤：Type 'string[]' is not assignable to type 'number'.
class FailureChecker1 extends GradeCounter {
  // countGrades(num: number) {
  //   return num;
  // }
}

// 錯誤：Type 'boolean' is not assignable to type 'number'.ts(2416)
class FailureChecker2 extends GradeCounter {
  // countGrades(grades: string[]) {
  //   return true;
  // }
}

// 正確
class SuccessChecker3 extends GradeCounter {
  countGrades(grades: string[]) {
    return grades.length;
  }
}

// 正確
class SuccessChecker4 extends GradeCounter {
  countGrades(grades: string[]) {
    return super.countGrades(grades, 'A');
  }
}

export {};

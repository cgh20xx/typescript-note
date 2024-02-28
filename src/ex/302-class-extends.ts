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

// 介面（Interfaces）和抽象類（Abstract Classes）都是 TypeScript 和許多其他編程語言中用來實現抽象和封裝的重要概念。它們之間有一些關鍵的不同，這些不同影響它們各自最適合的應用場景：

// 介面（Interfaces）
// - 定義契約：介面主要用於定義對象的形狀，即對象應有的屬性和方法，但不實現這些方法。
// - 實現多重繼承：一個類可以實現多個介面，這使得 TypeScript 能夠彌補不直接支持多重繼承的缺陷。
// - 彈性：介面非常靈活，它們可以被用來定義函數的形狀、構造函數的形狀、甚至用來定義索引的類型。

// 抽象類（Abstract Classes）
// - 實現部分功能：抽象類可以實現一些方法，同時留下其他方法作為抽象方法供子類實現。這是介面無法做到的。
// - 繼承：抽象類是用於繼承的。一個類可以繼承自另一個類（包括抽象類），但只能繼承一個類。
// - 成員可訪問性：抽象類可以包含成員的可訪問性修飾符（如 public、protected、private），這在介面中是不允許的。

// 應用場景比較
// - 當你想要定義一個契約給多個不相關的類時，使用介面。介面非常適合定義公共的 API 契約，讓不同的類去實現相同的介面，確保它們都遵循相同的結構。
// - 當你計劃進行代碼的重用，且類之間有共通的方法或屬性時，使用抽象類。抽象類適合用來作為多個有共同特徵的類的基類，通過繼承抽象類，子類可以擁有一致的方法或屬性，同時也能夠擴展新的功能。
// 選擇介面還是抽象類，取決於你的具體需求，以及你想要如何組織你的代碼。在許多情況下，結合使用介面和抽象類會是最佳做法。

export {};

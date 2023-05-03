// ts 的 class 修飾子

// public：公開的，所有人都可以直接存取，預設可省略。
// protected：受保護的，只有自己內部和繼承的子類別內部可以存取。
// private：私有的，只有自己內部可以存取。

// 注意：protected、private 只有在 ts 開發中才會有效，輸出的 js 還是 public。

class BaseInfo {
  // public name: string = 'hank'
  protected name: string = 'hank'
  // private name: string = 'hank'
  getName() {
    return this.name
  }
}

class UserInfo extends BaseInfo {
  hello() {
    console.log(`${this.name} say hello`);
  }
}

const baseinfo = new BaseInfo();
// baseinfo.name // error: protected name 不可直接存取
const userInfo = new UserInfo();
// console.log(userInfo.name); // error: protected name 不可直接存取
console.log(userInfo.getName());


// js 原生 Private fields
// 注意：tsconfig.js compilerOptions.target 需設定為 ES6 以上

// 做用 # 符號表示 private
class PrivateInfo {
  #name: string = 'private name'
  getName() {
    return this.#name;
  }
}

const privateInfo = new PrivateInfo();
console.log('privateInfo:', privateInfo);
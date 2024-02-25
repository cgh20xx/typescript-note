// Record<K, T>：創建一個包含屬性鍵為 K，屬性值為 T 的物件型別。
// K 常表示 Key
// T 常表示 Type

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

cats.boris; // 指標移到 cats 上會顯示 const cats: Record<CatName, CatInfo>

export {};

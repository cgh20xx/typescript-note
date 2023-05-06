// interface generics
interface Card<T> {
  title: string
  desc: T
}

// printCardInfo 用 TT 是避免與 Card 的 T 搞混，就算 T 也是可以，只要知道與上面的 T 是不同的 scope 就好。
function printCardInfo<TT>(desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: 'hank',
    desc
  }
  return data
}

console.log(printCardInfo<string>('my desc'));
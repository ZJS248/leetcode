async function fn1() {
  await fn2()
  console.log(1)
}
async function fn2() {
  await fn3()
  console.log(2)
}
async function fn3() {
  console.log(3)
}
fn1()
console.log(4);
const arr: (number[] | string[]) = []
const map = arr.map((item: string | number) => item)
const filter = arr.filter((item: any) => item)
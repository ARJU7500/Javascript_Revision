const myNum = [1,2,3];

const getNum = myNum.reduce( (acc, currNum)=>{
    // console.log(`acc:${acc} ans currNum: ${currNum}`);
    return acc+currNum
},6)
// console.log(getNum);
const getNum1 = myNum.reduce( (acc, currNum)=> acc+currNum, 0)
// console.log(getNum1)

let shoppingCart = [
    {name:'apple', price:50},
    {name:'mango', price:53},
    {name:'banana', price:55},
    {name:'pine apple', price:85},
    {name:'orange', price:50}
]
const list = shoppingCart.reduce((acc, item)=>acc+ item.price, 0)
console.log(list);
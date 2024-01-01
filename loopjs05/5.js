const coading = ["c","c++","java","js","devops"]
coading.forEach( (item)=>{
    // console.log(`I can code in ${item}`)
})
coading.forEach( function (item){
    // console.log(`arjun can code in ${item}`)
})

function printMe()
{
    console.log(`hii arjun welcome to js`);
}
// coading.forEach(printMe)

coading.forEach( (item,index,array)=>{
    // console.log(item,index,array);
})
const myCode = [
    {
        languageName:"javaScript",
        expriyance:2
    },
    {
        languageName:"java",
        expriyance:2
    },
    {
        languageName:"C",
        expriyance:2
    },
    {
        languageName:"C++",
        expriyance:2
    },
    {
        languageName:"Devops",
        expriyance:2
    }
]
myCode.forEach( (item)=>
{
    console.log(item.languageName);
})
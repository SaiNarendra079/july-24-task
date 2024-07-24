//for each

let array=[1,2,3,4,5,6,7,8,9,10]
array.forEach((itrtr,index)=>{
  console.log(itrtr)
})

//map
let array1=[1,2,3,4,5,6,7,8,9,10]
let map_array=array1.map((itrtr,index)=>{
  return (itrtr*2)
})
console.log('original array:',array1)
console.log('Modified Array:',map_array)

//filter

let even_numbers_btw=array1.filter((itrtr)=>
{
  if(itrtr%2===0){
    return itrtr
  }
})
console.log('EVEN Numbers b/w 1-10:',even_numbers_btw)

//reduce
let array2=array1.reduce((sum,itrtr)=>{
  return sum=sum+itrtr
},0)
console.log('sum of the digits:',array2)

let details=[
  {
    name:'sai',
    age:20
  },
  {
    name:'Hema kumar',
    age:26
  },
  {
    name:'denji',
    age:16
  },
  {
    name:'Dp',
    age:28
  },
  {
    name:'Sekhar',
    age:30
  },
  {
    name:'naidu',
    age:19
  },

]
//find
let greater_than_25=details.find((itrtr)=>{
  if(itrtr.age>=25)
console.log(itrtr.name)
})

//findIndex
let younger=details.findIndex((itrtr,index)=>itrtr.age<=18,0)
console.log(younger)
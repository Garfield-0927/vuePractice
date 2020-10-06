//a里面export函数和类

// export function mul(num1,num2){
//   return num1 * num2
// }


// export class person{
//   eat(){
//     console.log("在吃饭");
//   }
// }



//先写好再导出也是一样的操作

function mul(num1,num2){
  return num1 * num2
}


class person{
  eat(){
    console.log("在吃饭");
  }
}

export {mul, person}


// export default  
// default 只能有一个

const school = "hust";
export default school;


//b里面import其他js里面的函数或者类

// 通过import * 导入全部在js文件中export的内容
import * as aaa from "./a.js";
console.log(aaa.mul(50,40));

import {mul, person} from "./a.js";


console.log(mul(15,20));

let person1 = new person();
person1.eat();

import sch from "./a.js";

console.log(sch+'er');

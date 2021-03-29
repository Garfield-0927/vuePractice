/*
To Implement A convert functino
requirement:
1. take an objective as the first argument
2. take a string as the key of the object as the second argument 
3. retain all arguments in obj
4. when obj changes, log all changes in the console
 */


let obj = {
  foo: 1,
  bar: 2,
  baz: 3
}
// let obj2 = {
//   foo: 1,
//   bar: 2,
//   baz: 3
// }
// function myConvert(obj){
//   for(let key in obj){
//     let internalValue = obj[key];
//     Object.defineProperty(obj, key, {
//       get(){
//         console.log(internalValue);
//         return internalValue;
//       },
//       set(newV){
//         console.log(internalValue + " to " + newV);
//         internalValue = newV;
//       }
//     })
//   }
// }

// myConvert(obj2);
// obj2.foo;
// obj2.foo = 111;

function convert(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]            // 这里的internalValue是核心
    Object.defineProperty(obj, key, {
      get() {
        console.log(internalValue);
        return internalValue;
      },
      set(newV) {
        console.log(`from: ${internalValue} to: ${newV}`);
        internalValue = newV;
      }
    })
  })
}

convert(obj);
obj.bar;
obj.bar = 222;




// dependency tracking
/*
  1. create a Dep class with two methods: depend and notify
  2. create an autorun function that takes an updater function
  3. inside the updater function, you can explicitly depend on an instance of Dep by calling dep.depend()
  4. Later, you can trigger the updater function to run again by calling dep.notify()


  usage is as belows:

  const dep = new Dep();

  autorun(()=>{
    dep.depend();
    console.log('updated');
  })

  dep.notify();
*/


window.Dep = class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeUpdate) {
      // register the current active update
      // as a subscriber
      this.subscribers.add(activeUpdate);
    }

  }

  notify() {
    // run all subscriber functions
    this.subscribers.forEach(fn => fn());
  }
}


let activeUpdate;

function autorun(update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  }
  wrappedUpdate();
}




function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null && obj !== undefined
}


function observe (obj) {
  if (!isObject(obj)){
    throw new TypeError();
  }

  Object.keys(obj).forEach(key=>{
    let internalV = obj[key];
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get(){
        dep.depend();
        return internalV;
      },
      set(newV){
        const isChanged = internalV !== newV;
        if (isChanged){
          internalV = newV;
          dep.notify();
        }

      }
    })
  })
}








export function proxy(vm, target, key){
  Object.defineProperty(vm, key, {
    get(){
      console.log('in proxy');
      return vm[target][key];
    },
    set(newV){
      vm[target][key] = newV;
    }
  })
}
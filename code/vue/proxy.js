export function proxy(vm, target, key){
  Object.defineProperty(vm, key, {
    get(){
      return vm[target][key];
    },
    set(newV){
      vm[target][key] = newV;
    }
  })
}
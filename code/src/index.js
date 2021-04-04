import Vue from 'vue'


// {} 里面其实就是options     options API
let vm = new Vue({
  el: 'app',
  data(){
    return{
      str1: 'garfield',
      num1: 111,
      arr1: [666,777,888],
      obj1: {
        id: 20191111,
        school: {
          name:'hust',
          region: 'wuhan'
        }
      }
    }
  }
})

console.log(vm.obj1);
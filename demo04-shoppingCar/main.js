  const app = new Vue({
    el: '#app',
    data:{
      books: [
        {
          id : 1,
          name: '电路理论',
          date: '2000-9-1',
          price: 59,
          count: 1
        },

        {
          id : 2,
          name: '数据结构',
          date: '2000-9-1',
          price: 79,
          count: 1
        },

        {
          id : 3,
          name: '大学英语',
          date: '2000-9-1',
          price: 69,
          count: 1
        },

        {
          id : 4,
          name: '线性代数',
          date: '2000-9-1',
          price: 99,
          count: 1
        }
        
      ] 
    },

    filters:{
      showPrice (price){
        return '$' + price.toFixed(2);
      }
    },

    methods:{
      add(index){
        this.books[index].count++;
      },

      sub(index){
        this.books[index].count--;
      },

      remove(index){
        this.books.splice(index,1);
      }


    },

    computed:{
      totalPrice(){
        let result = 0;
        for( let i = 0 ; i < this.books.length; i++){
          result += (this.books[i].price * this.books[i].count);
        }
        return result;
      }
    }
})

import Vue from "vue";

// {} 里面其实就是options     options API
let vm = new Vue({
	el: "app",
	data() {
		return {
			str1: "garfield",
			num1: 111,
			arr1: [666, 777, 888],
			obj1: {
				id: 20191111,
				school: {
					name: "hust",
					region: "wuhan",
				},
			},
			student: [
				{
					id: 1,
					name: "zjh",
				},
				{
					id: 2,
					name: "zjh2",
				},
				{
					id: 3,
					name: "zjh3",
				},
			],
		};
	},
});

console.log(vm.student);

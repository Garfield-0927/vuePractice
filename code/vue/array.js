import { ARR_METHODS } from "./config";
import { observeArr } from "./observeArr";
let originArrMethods = Array.prototype;
let arrMethods = Object.create(originArrMethods);

ARR_METHODS.forEach(function (m) {
	arrMethods[m] = function () {
		const args = Array.prototype.slice.call(arguments);
		let res = originArrMethods[m].apply(this, args);

		let newArr;
		switch (m) {
			case "push":
			case "unshift":
				newArr = args;
				break;
			case "splice":
				newArr = args.slice(2);
				break;
			default:
				break;
		}
		newArr && observeArr(newArr);
		return res;
	};
});


export {arrMethods}

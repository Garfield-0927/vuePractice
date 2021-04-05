import { defineReactive } from "./defineReactive";
import { observeArr } from "./observeArr";
import { arrMethods } from "./array";
function Observer(data) {
	if (Array.isArray(data)) {
    data.__proto__ = arrMethods;
    observeArr(data)
	} else {
		this.walk(data);
	}
}
Observer.prototype.walk = function (data) {
	Object.keys(data).forEach((key) => {
		defineReactive(data, key, data[key]);
	});
};
export default Observer;

import {defineReactive} from './defineReactive'

function Observer(data) {
	if (Array.isArray(data)) {
		console.log("isArray");
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

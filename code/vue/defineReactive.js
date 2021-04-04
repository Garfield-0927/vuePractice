import { observe } from "./observe";
export function defineReactive(data, key, value) {
	observe(value);
	Object.defineProperty(data, key, {
		get() {
			console.log("in defineReactive:" + value);
			return value;
		},
		set(newV) {
			if (newV === value) {
				return;
			}
			value = newV;
		},
	});
}

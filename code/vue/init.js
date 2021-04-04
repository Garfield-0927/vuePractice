import { proxy } from "./proxy";
import { observe } from "./observe";
export function initState(vm) {
	let options = vm.$options;
	if (options.data) {
		initData(vm);
	} else {
		// observe((vm._data = {}), true);
	}
  // if (oprtions.props) {
	// 	initProps();
	// }
	// if (options.methods) {
	// 	initMethods(vm, options.methods);
	// }
	// if (options.computed) {
	// 	initComputed(vm, options.computed);
	// }
	// if (options.watch && options.watch !== nativeWatch) {
	//   initWatch(vm, options.watch)
	// }

	function initData(vm) {
		let data;
		data = vm._data = typeof vm.$options.data === "function" ? vm.$options.data.call(vm) : data || {};
		Object.keys(vm._data).forEach((key) => {
			proxy(vm, "_data", key);
		});
    console.log(vm);
    console.log(data === vm._data);
		observe(data);

    // console.log(data.str1);
	}
}

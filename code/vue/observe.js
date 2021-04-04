import Observer from './observer'

export function observe(data) {
	if (data == null || typeof data !== "object") return;
  return new Observer(data);
}

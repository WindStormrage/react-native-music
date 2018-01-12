export function toTime(time) {
	return parseInt(time/60) + ':' + (time%60>10 ? parseInt(time%60) : ('0'+''+parseInt(time%60)))
}

export function toInt(time) {
	let a = time.split(':');
	return parseInt(a[0])*60+parseInt(a[1]);
}
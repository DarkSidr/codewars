function descendingOrder(n){
	return n >= 0 ? +String(n).split('').sort((a, b) => b - a).join('') : 0;
}
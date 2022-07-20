function validatePIN(pin) {
	let str = pin.replace(/\D/gm, '');
	if (str.length === 4 || str.length === 6) {
		if(str === pin) {
			return true;
		}
	}
	return false;
}
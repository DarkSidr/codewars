function getMiddle(s) {
	if (s.length % 2 === 0) {
		const a = s.substring(0, s.length / 2);
		const b = s.substring(s.length / 2);
		const c = a.charAt(a.length - 1) + b.charAt(0);
		return c;
	} else {
		const a = s.substring(0, s.length / 2);
		const b = s.substring(s.length / 2);
		const c = b.charAt(0);
		return c;
	}
}
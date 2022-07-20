function triangular( n ) {
	if(n <= 0) {
		return 0;
	} else {
		const arrRes = [];
		for (let i = n; i > 0; i--) {
			arrRes.push(i);
		}
		return arrRes.reduce((prev, curr) => prev + curr);
	}
}
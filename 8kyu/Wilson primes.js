const factor = (num) => {
	return (num != 1n) ? num * factor(num - 1n) : 1n;
};
function amIWilson(p) {
	const bi = BigInt(p);
	return ((factor(bi - 1n) + 1n) % (bi * bi)) == 0n;
}

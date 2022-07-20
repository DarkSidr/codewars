function betterThanAverage(classPoints, yourPoints) {
	const avg = classPoints.reduce((prev,  curr) => {
		return prev + curr;
	}) / classPoints.length;
	return yourPoints > avg;
}
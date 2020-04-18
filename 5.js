function createMatrix(n) {
	var matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
	var diag1 = 0, diag2 = 0, min = 1, max = 99, total;

	for (let i = 0; i < n; i++ ) {
		for (let j = 0; j < n; j++) {
			matrix[i][j] = Math.floor(Math.random() * max) + min;

			if (i == j) {
				diag1+=matrix[i][j];
			}
			if (i+j == (n-1)) {
				diag2+=matrix[i][j];
			}
		}
	}
	total = diag1 + diag2;
	console.log(matrix);
	console.log("Total : " +total);
}
createMatrix(3);

function divideAndSort(n) {
	var array = [];
	var angkaArray = n.toString().split('');
	var jumlahAngka = '';

	for (i = 0; i < angkaArray.length; i++) {
		if (angkaArray[i] == 0) {
			array.sort((a,b) => a-b);
			jumlahAngka += array.join('');
			array = [];
		} else if (i == (angkaArray.length-1)) {
			if (angkaArray[i] !== 0) {
				array[i] = angkaArray[i];
			}

			array.sort((a,b) => a-b);
			jumlahAngka += array.join('');
			array = [];
		} else {
			array[i] = angkaArray[i];
		}
	}
	console.log(jumlahAngka);
}
divideAndSort(5956560159466056);
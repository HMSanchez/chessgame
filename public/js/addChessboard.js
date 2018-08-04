var header = document.getElementById('header');
var randArr = chess960update();

(function addChessboard() {

	// Main Table
	var chessboard = document.getElementById('chess-div');
	var chessboardTable = document.createElement('table');
	chessboardTable.className = 'chessboard-table';

	// Top Index Row Creation
	var tableRow = document.createElement('tr');
	tableRow.className = 'chessboard-index-row';
	chessboardTable.appendChild(tableRow);

	var letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '];
	var numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];

	// A-H Labels TOP
	for (i = 0; i < 10; i++) {
		var tableCell = document.createElement('td');
		tableCell.className = 'chessboard-index-cell';
		tableCell.style.backgroundColor = "white";
		tableRow.appendChild(tableCell);
		tableCell.textContent = letters[i];
	}

	// 8 x 8 Creation and Piece Placement
	for (i = 0; i < 8; i++) {
		var tableRow = document.createElement('tr');
		tableRow.className = 'chessboard-row';
		chessboardTable.appendChild(tableRow);

		// Left Row Numbers
		var tableCell = document.createElement('td');
		tableCell.className = 'chessboard-index-cell';
		tableCell.style.backgroundColor = "white";
		tableRow.appendChild(tableCell);
		tableCell.textContent = numbers[i];

		for (j = 0; j < 8; j++) {
			//Setting each squares' attributes
			var tableCell = document.createElement('td');
			tableCell.className = 'chessboard-cell';
			tableCell.id = letters[j + 1] + numbers[i] + '-' + 'td';

			tableCell.setAttribute('ondragenter', 'return dragEnter(event)');
			tableCell.setAttribute('ondragover', 'return dragOver(event)');
			tableCell.setAttribute('ondrop', 'return dragDrop(event)');
			tableCell.setAttribute('dropOffBoard', 'snapback');


			tableRow.appendChild(tableCell);

			//Assigning each span where pieces are to be set
			var span = document.createElement('span');
			span.className = 'chess-piece-span';
			span.id = letters[j + 1] + numbers[i] + '-' + 'span';

			span.setAttribute('draggable', 'true');
			span.setAttribute('ondragstart', 'return dragStart(event)');

			tableCell.appendChild(span);
			if (header.innerHTML != 'CHESS 960') {
				// CHESS
				switch (i) {
					//Top to bottom indexing
					case 1:
						var spanText = document.createTextNode(String.fromCharCode(9823));
						span.appendChild(spanText);
						break;
					case 6:
						var spanText = document.createTextNode(String.fromCharCode(9817));
						span.appendChild(spanText);
						break;
					case 0:
						//Row 1 across
						switch (j) {
							case 0:
							case 7:
								var spanText = document.createTextNode(String.fromCharCode(9820));
								span.appendChild(spanText);

								break;
							case 1:
							case 6:
								var spanText = document.createTextNode(String.fromCharCode(9822));
								span.appendChild(spanText);

								break;
							case 2:
							case 5:
								var spanText = document.createTextNode(String.fromCharCode(9821));
								span.appendChild(spanText);
								break;
							case 3:
								var spanText = document.createTextNode(String.fromCharCode(9819));
								span.appendChild(spanText);
								break;
							case 4:
								var spanText = document.createTextNode(String.fromCharCode(9818));
								span.appendChild(spanText);
								break;
						};
						break;
					//Row 8 across
					case 7:
						switch (j) {
							case 0:
							case 7:
								var spanText = document.createTextNode(String.fromCharCode(9814));
								span.appendChild(spanText);
								break;
							case 1:
							case 6:
								var spanText = document.createTextNode(String.fromCharCode(9816));
								span.appendChild(spanText);
								break;
							case 2:
							case 5:
								var spanText = document.createTextNode(String.fromCharCode(9815));
								span.appendChild(spanText);
								break;
							case 3:
								var spanText = document.createTextNode(String.fromCharCode(9813));
								span.appendChild(spanText);
								break;
							case 4:
								var spanText = document.createTextNode(String.fromCharCode(9812));
								span.appendChild(spanText);
								break;
						};
						break;
				};
			} else {
				// CHESS 960
				switch (i) {
					//Top to bottom indexing
					case 1:
						var spanText = document.createTextNode(String.fromCharCode(9823));
						span.appendChild(spanText);
						break;
					case 6:
						var spanText = document.createTextNode(String.fromCharCode(9817));
						span.appendChild(spanText);
						break;
					case 0:
						//Row 1 across
						switch (j) {
							case 0:
								var spanText = document.createTextNode(randArr[0][0]);
								span.appendChild(spanText);
								break;
							case 7:
								var spanText = document.createTextNode(randArr[0][7]);
								span.appendChild(spanText);
								break;
							case 1:
								var spanText = document.createTextNode(randArr[0][1]);
								span.appendChild(spanText);
								break;
							case 6:
								var spanText = document.createTextNode(randArr[0][6]);
								span.appendChild(spanText);
								break;
							case 2:
								var spanText = document.createTextNode(randArr[0][2]);
								span.appendChild(spanText);
								break;
							case 5:
								var spanText = document.createTextNode(randArr[0][5]);
								span.appendChild(spanText);
								break;
							case 3:
								var spanText = document.createTextNode(randArr[0][3]);
								span.appendChild(spanText);
								break;
							case 4:
								var spanText = document.createTextNode(randArr[0][4]);
								span.appendChild(spanText);
								break;
						};
						break;
					//Row 8 across
					case 7:
						switch (j) {
							case 0:
								var spanText = document.createTextNode(randArr[1][0]);
								span.appendChild(spanText);
								break;
							case 7:
								var spanText = document.createTextNode(randArr[1][7]);
								span.appendChild(spanText);

								break;
							case 1:
								var spanText = document.createTextNode(randArr[1][1]);
								span.appendChild(spanText);
								break;
							case 6:
								var spanText = document.createTextNode(randArr[1][6]);
								span.appendChild(spanText);

								break;
							case 2:
								var spanText = document.createTextNode(randArr[1][2]);
								span.appendChild(spanText);
								break;
							case 5:
								var spanText = document.createTextNode(randArr[1][5]);
								span.appendChild(spanText);
								break;
							case 3:
								var spanText = document.createTextNode(randArr[1][3]);
								span.appendChild(spanText);
								break;
							case 4:
								var spanText = document.createTextNode(randArr[1][4]);
								span.appendChild(spanText);
								break;
						};
						break;
				};
			}

		}

		// Right Row Numbers
		var tableCell = document.createElement('td');
		tableCell.className = 'chessboard-index-cell';
		tableCell.style.backgroundColor = "white";
		tableRow.appendChild(tableCell);
		tableCell.textContent = numbers[i];
	}

	// Bottom Index Row Creation
	var tableRow = document.createElement('tr');
	tableRow.className = 'chessboard-index-row';
	chessboardTable.appendChild(tableRow);

	// A-H Labels BOTTOM
	for (i = 0; i < 10; i++) {
		var tableCell = document.createElement('td');
		tableCell.className = 'chessboard-index-cell';
		tableCell.style.backgroundColor = "white";
		tableRow.appendChild(tableCell);
		tableCell.textContent = letters[i];
	}

	chessboard.appendChild(chessboardTable);

})();


function chess960update() {
	var arrayHolder = [];
	var white = [];
	var rank = new Array(8),
		// Randomizer
		d = function (num) { return Math.floor(Math.random() * ++num) },
		emptySquares = function () {
			var arr = [];
			for (var i = 0; i < 8; i++) if (rank[i] == undefined) arr.push(i);
			return arr;
		};
	// place one bishop on any black square
	rank[d(2) * 2] = String.fromCharCode(9821);
	// place the other bishop on any white square
	rank[d(2) * 2 + 1] = String.fromCharCode(9821);
	// place the queen on any empty square
	rank[emptySquares()[d(5)]] = String.fromCharCode(9819);
	// place one knight on any empty square
	rank[emptySquares()[d(4)]] = String.fromCharCode(9822);
	// place the other knight on any empty square
	rank[emptySquares()[d(3)]] = String.fromCharCode(9822);
	// place the rooks and the king on the squares left, king in the middle
	for (var x = 1; x <= 3; x++) rank[emptySquares()[0]] = x == 2 ? String.fromCharCode(9818) : String.fromCharCode(9820);

	for (var k = 0; k < rank.length; k++) {
		switch (rank[k]) {
			case String.fromCharCode(9820):
				white.push(String.fromCharCode(9814));
				break;
			case String.fromCharCode(9822):
				white.push(String.fromCharCode(9816));
				break;
			case String.fromCharCode(9821):
				white.push(String.fromCharCode(9815));
				break;
			case String.fromCharCode(9819):
				white.push(String.fromCharCode(9813));
				break;
			case String.fromCharCode(9818):
				white.push(String.fromCharCode(9812));
				break;
		}
	}

	console.log(rank);
	console.log(white);
	arrayHolder.push(rank);
	arrayHolder.push(white);
	console.log(arrayHolder);
	return arrayHolder;
}
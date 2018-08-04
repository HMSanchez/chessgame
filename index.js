var express = require('express');
var app = express();
var path = require('path');


app.use('/static', express.static(path.join(__dirname, 'public')))

// var chessBoard = require('./public/js/addChessboard');


app.get('/', function (req, res, $http) {
	res.send("Hey!");
	chessBoard.addChessBoard();

});


function colorPiece(pieceNr) {
	if (9811 < pieceNr && pieceNr < 9818) {
		color = 'white';
	}
	if (9817 < pieceNr && pieceNr < 9824) {
		color = 'black';
	}
	return color;
}

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


	return rank.length + white.length;
}

function chess960Arr() {
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


module.exports = {
	chessboard960: function () {
		return chess960update();
	},
	chessboard960arrays: function () {
		return chess960Arr();
	},
	pieceColor: function (p) {
		return colorPiece(p);
	}
};



app.listen(3000);
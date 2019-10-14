let winValue = 0;
let amethyst = 0;
let ruby = 0;
let emerald = 0;
let diamond = 0;
let value = 0;
let wins = 0;
let loses = 0;
let winfixer = "notdone";

function randomiser() {
	winValue = Math.floor(Math.random() * 120) + 19;
	amethyst = Math.floor(Math.random() * 12) + 1;
	ruby = Math.floor(Math.random() * 12) + 1;
	emerald = Math.floor(Math.random() * 12) + 1;
	diamond = Math.floor(Math.random() * 12) + 1;
}
randomiser();

$("#winvalue").html("Win Value: " + winValue);

function winOrlose(value) {
	if (value === winValue && winfixer === "notdone") {
		$("#winOrlose").html("You Win!");
		wins = wins + 1;
		$("#wins").html("Wins: " + wins);
		winfixer = "done";
	}
	if (value > winValue && winfixer === "notdone") {
		$("#winOrlose").html("You Lose!");
		loses = loses + 1;
		$("#loses").html("Loses: " + loses);
		winfixer = "done";
	}
	$("#yourValue").html("Your Value: " + value);
}

$("#gem1").click(function() {
	value = value + ruby;
	winOrlose(value);
});

$("#gem2").click(function() {
	value = value + amethyst;
	winOrlose(value);
});

$("#gem3").click(function() {
	value = value + emerald;
	winOrlose(value);
});

$("#gem4").click(function() {
	value = value + diamond;
	winOrlose(value);
});

$("#reset").click(function() {
	randomiser();
	winfixer = "notdone";
	value = 0;
	$("#winvalue").html("Win Value: " + winValue);
	$("#yourValue").html("Your Value: " + value);
	$("#winOrlose").html(" ");

});

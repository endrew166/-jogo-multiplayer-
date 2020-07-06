export default function renderScreen(
	screen,
	game,
	requestAnimationFrame,
	currentPlayerId
) {
	const context = screen.getContext("2d");
	context.fillStyle = "red";
	context.clearRect(0, 0, 20, 20);

	for (const playerId in game.state.players) {
		const player = game.state.players[playerId];
		context.fillStyle = "#2F4F4F";
		context.fillRect(player.x, player.y, 1, 1);
	}

	for (const fruitId in game.state.fruits) {
		const fruit = game.state.fruits[fruitId];
		context.fillStyle = "#66CDAA";
		context.fillRect(fruit.x, fruit.y, 1, 1);
	}

	const currentPlayer = game.state.players[currentPlayerId];

	if (currentPlayer) {
		context.fillStyle = "#98FB98";
		context.fillRect(currentPlayer.x, currentPlayer.y, 1, 1);
	}

	requestAnimationFrame(() => {
		renderScreen(screen, game, requestAnimationFrame, currentPlayerId);
	});
}

const board = document.querySelector('.board')


var gameBoard = (() => {
    const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    return {board}
})();

const Player (token, wins) => {
    let wins = 0
    const wonGame = () => {
        wins += 1
    }
    return {

    }
}

gameBoard.board[0][1] = 2

console.log(gameBoard.board[0][1] = 2)

//var displayController()

function renderGameboard() {
    for (let i = 1; i < 10; i++) {
        const j = document.createElement('div');
        j.classList.add('content');
        j.textContent = `${i}`

        board.appendChild(j)
    }
}

renderGameboard()
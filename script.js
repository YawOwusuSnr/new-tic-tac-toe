const board = document.querySelector('.board')
const cells = document.querySelectorAll('.cells')
let piecesPlayed = 1;

const cell1 = document.getElementById('0')
const cell2 = document.getElementById('1')
const cell3 = document.getElementById('2')
const cell4 = document.getElementById('3')
const cell5 = document.getElementById('4')
const cell6 = document.getElementById('5')
const cell7 = document.getElementById('6')
const cell8 = document.getElementById('7')
const cell9 = document.getElementById('8')




var gameBoard = (() => {
    const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    var mark = (loc, player) => {
        row = (loc % 3)
        col = Math.floor(loc/3)
        board[row][col] = currPlayer.num()
        return board[row][col]
    }
    var checkContent = () => {
        /* board.forEach(row => {
            row.forEach(el => {
                console.log(el)
            })
        })*/
        console.log(board[0])
        console.log(board[1])
        console.log(board[2])
    }
    return {board, mark, checkContent};
})();

const Player = (token) => {
    let wins = 0
    let moves = 0
    const sayName = () => console.log(`my name is ${token}`);
    const sayWins = () => console.log(`I have ${wins} wins`);
    const wonGame = () => {
        wins += 1
    }
    const play = () => {
        moves += 1
    }
    return {sayName, sayWins, wonGame, play, token,}
}

const user1 = Player("X")
const user2 = Player("O")

//var displayController()

function reRenderGameboard() {
    for (let i = 0; i < 9; i++) {
        cell = document.getElementById(`${i}`);
        cell.textContent = ''
        cell.classList.remove('marked')
    }
}


var currPlayer = (() => {
    num = () => { if (piecesPlayed % 2 == 0) {
        return 2
    } else {
        return 1
    }}
    char = () => { if (piecesPlayed % 2 == 0) {
        return 'O'
    } else {
        return 'X'
    }}
    return {num, char}
})();

function markSpot(ids) {
    player = currPlayer.num()
    if (ids.classList.contains('marked')) {
        return
    } else {
        ids.classList.add('marked')
        ids.textContent = currPlayer.char()
        gameBoard.mark(ids.id)
        if (currPlayer.num() == 2){
            user1.play()
        } else {
            user2.play()
        }
        piecesPlayed += 1
    }
}


cells.forEach((box) => {
    box.addEventListener('click', (event) => {
        place = event.target.id
        if (event.target.classList.contains('marked')) {
            return
        } else { 
            //gameBoard.mark(place)
            markSpot(event.target)
            gameBoard.checkContent()
        }


        
    }
    );
}); 




reRenderGameboard()
// backtick `
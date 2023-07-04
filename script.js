const board = document.querySelector('.board')
const winner = document.querySelector('#winner')
const cells = document.querySelectorAll('.cells')
let piecesPlayed = 1;


var gameBoard = (() => {
    const board = [[null, null, null], [null, null, null], [null, null, null]]
    var mark = (loc, player) => {
        row = (loc % 3)
        col = Math.floor(loc/3)
        board[row][col] = currPlayer.num()
        return board[row][col]
    }
    var checkContent = () => {
        console.log(board[0])
        console.log(board[1])
        console.log(board[2])
    }

    var checkCol = (loc) => {
        row = (loc % 3)
        if ((board[row][0] == board[row][1]) && (board[row][1] == board[row][2])) {
            console.log('1')
            return true
        }
    }

    var checkRow = (loc) => {
        col = Math.floor(loc/3)        
        if ((board[0][col] == board[1][col]) && (board[1][col] == board[2][col])) {
            console.log('2')
            return true
        }
    }

    var leftToRight = () => {
        if (((board[0][0] == board[1][1]) && (board[1][1] == board[2][2])) && (board[0][0] != null))  {
            console.log('3')
            return true
        }
    }

    var rightToLeft = () => {
        if (((board[0][2] == board[1][1]) && (board[1][1] == board[2][0])) && (board[0][2] != null)) {
            console.log('4')
            return true
        }
    }

    var checkForWin = (locate) => { if (checkRow(locate) || (checkCol(locate)) || (leftToRight()) || (rightToLeft())) {
        winner.textContent = `Player ${currPlayer.char()} Wins!`
        return currPlayer.char()
    } }

    return {board, mark, checkContent, checkForWin,};
})();

const Player = (token) => {
    let wins = 0
    const sayName = () => console.log(`my name is ${token}`);
    const sayWins = () => console.log(`I have ${wins} wins`);
    const wonGame = () => {
        wins += 1
    }
    const play = () => {
        //
    }
    return {sayName, sayWins, wonGame, play, token,}
}

const user1 = Player("X")
const user2 = Player("O")


function reRenderGameboard() {
    for (let i = 0; i < 9; i++) {
        cell = document.getElementById(`${i}`);
        cell.textContent = ''
        cell.classList.remove('marked')
        winner.textContent = ''
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
        console.log(gameBoard.checkForWin(ids.id))
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



const resetB = document.createElement('button')
resetB.textContent = 'RESET'
resetB.setAttribute('style', 'color: white; background: red; padding: 20px 20px; font-size: 20px; border-radius: 5px');  
document.body.appendChild(resetB)

resetB.addEventListener('click', () => {
    reRenderGameboard()
    resetB.classList.toggle('marked') 
});
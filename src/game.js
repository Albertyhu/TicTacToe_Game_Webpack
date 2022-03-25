
const startingGrid = {
    a1: '',
    b1: '',
    c1: '',
    a2: '',
    b2: '',
    c2: '',
    a3: '',
    b3: '',
    c3: '',
}

var grid = {
    a1: '',
    b1: '',
    c1: '',
    a2: '',
    b2: '',
    c2: '',
    a3: '',
    b3: '',
    c3: '',
}

var playerOneTurn = true;
var gameOver = false;

export function displayTurn() {
    if (playerOneTurn) {
        document.getElementById('playerTurn').innerHTML = "It's player One's turn.";
    }
    else {
        document.getElementById('playerTurn').innerHTML = "It's player Two's turn.";
    }
}

export const togglePlayerTurn = () => {
    playerOneTurn = !playerOneTurn;
    displayTurn();
}

export const refresh = () => {
    const nodes = document.getElementsByClassName('square')
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].firstChild !== null) {
            nodes[i].removeChild(nodes[i].firstChild);
        }
    }
    playerOneTurn = true;
    grid = Object.assign({}, startingGrid)
    gameOver = false;
    displayTurn();
}

export function mark(obj) {
    if (obj.firstChild === null && !gameOver) {
        if (playerOneTurn) {
            obj.innerHTML = "<span id = 'text'>X</text>";
            grid[`${obj.id}`] = 'p1';

        }
        else {
            obj.innerHTML = "<span id = 'text'>O</text>";
            grid[`${obj.id}`] = 'p2';

        }
        check();
        if (!gameOver)
            togglePlayerTurn();

    }
}


export function position() {
    const nodes = document.getElementsByClassName('square');
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].firstChild !== null) {
            const width = nodes[i].offsetWidth;
            const height = nodes[i].offsetHeight;
            nodes[i].firstChild.style.paddingLeft = `${width / 4}px`;
            nodes[i].firstChild.style.paddingTop = `${height / 2}px`;
        }
    }
}

export function check() {
    if (grid.a1 !== '' && grid.a1 === grid.b1 && grid.a1 === grid.c1) {
        announceWinner();
    }
    else if (grid.a2 !== '' && grid.a2 === grid.b2 && grid.a2 === grid.c2) { announceWinner(); }
    else if (grid.a3 !== '' && grid.a3 === grid.b3 && grid.a3 === grid.c3) { announceWinner(); }
    else if (grid.a1 !== '' && grid.a1 === grid.a2 && grid.a1 === grid.a3) { announceWinner(); }
    else if (grid.b1 !== '' && grid.b1 === grid.b2 && grid.b1 === grid.b3) { announceWinner(); }
    else if (grid.c1 !== '' && grid.c1 === grid.c2 && grid.c1 === grid.c3) { announceWinner(); }
    else if (grid.a1 !== '' && grid.a1 === grid.b2 && grid.a1 === grid.c3) { announceWinner(); }
    else if (grid.c1 !== '' && grid.c1 === grid.b2 && grid.c1 === grid.a3) { announceWinner(); }
    else {
        if (isGridFull()) {
            document.getElementById('playerTurn').innerHTML = 'This round is a draw';
            gameOver = true;
        }
    }

}

export function isGridFull() {
    const nodes = document.getElementsByClassName("square")

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].firstChild === null) {
            return false;
            break;
        }
    }
    return true;
}

export function announceWinner() {
    let currentPlayer = '';
    if (playerOneTurn) {
        currentPlayer = 'Player One';
    }
    else {
        currentPlayer = 'Player Two';
    }
    const announce = currentPlayer + ' is the winner!';
    document.getElementById('playerTurn').innerHTML = announce;
    gameOver = true;
}
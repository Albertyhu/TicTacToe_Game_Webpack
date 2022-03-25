//const grid = ['a1' = null, 'b1' = null, 'c1' = null, 'a2' = null, 'b2' = null, 'c2' = null, 'a3' = null, 'b3' = null, 'c3' = null,];
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
/*
const refresh = () => (function () {
    const count = 3; 
    for (var i = 1; i <= 3; i++) {
        document.getElementById('a' + i).style.backgroundColor = 'white';
        document.getElementById('b' + i).style.backgroundColor = 'white';
        document.getElementById('c' + i).style.backgroundColor = 'white';
    }

})()*/

var playerOneTurn = true; 
var gameOver = false; 

function displayTurn () {
    if (playerOneTurn) {
        document.getElementById('playerTurn').innerHTML = "It's player One's turn.";
    }
    else {
        document.getElementById('playerTurn').innerHTML = "It's player Two's turn.";
    }
}

displayTurn();

const togglePlayerTurn = () => {
    playerOneTurn = !playerOneTurn;
    displayTurn();
}

const refresh = () => {
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

/*
function message(ele) {
    document.getElementById(ele).style.backgroundColor = 'blue';
}
*/

function mark(obj) {
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
        if(!gameOver)
           togglePlayerTurn();
       // console.log(grid[obj.id]); 
    }
}
/*
document.getElementById("a1").addEventListener('click', message('a1'))
document.getElementById('b1').addEventListener('click', message('b1'))
document.getElementById('c1').addEventListener('click', message('c1'))
document.getElementById('a2').addEventListener('click', message('a2'))
document.getElementById('b2').addEventListener('click', message('b2'))
document.getElementById('c2').addEventListener('click', message('c2'))
document.getElementById('a3').addEventListener('click', message('a3'))
document.getElementById('b3').addEventListener('click', message('b3'))
document.getElementById('c3').addEventListener('click', message('c3'))
*/
/*

document.getElementById("a1").onclick = message('a1');  
document.getElementById('b1').onclick = message('b1');  
document.getElementById('c1').onclick = message('c1');  
document.getElementById('a2').onclick = message('a2');  
document.getElementById('b2').onclick = message('b2');  
document.getElementById('c2').onclick = message('c2');  
document.getElementById('a3').onclick = message('a3');  
document.getElementById('b3').onclick = message('b3');  
document.getElementById('c3').onclick = message('c3');  
*/

function position() {
    const nodes = document.getElementsByClassName('square'); 
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].firstChild !== null) {
            const width = nodes[i].offsetWidth;
            const height = nodes[i].offsetHeight;
            nodes[i].firstChild.style.paddingLeft = `${width/4}px`;
            nodes[i].firstChild.style.paddingTop = `${height/2}px`;
        }
    }
}

function check() {
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

function isGridFull() {
    const nodes = document.getElementsByClassName("square")
    
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].firstChild === null) {
            return false;
            break;
        }
    }
    return true; 
}

function announceWinner() {
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
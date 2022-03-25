import _ from 'lodash';
//import html from "./file.html";
import { printMe } from './sampleprint.js'; 
import {
    displayTurn,
    togglePlayerTurn, 
    refresh, 
    mark,
    position,
    check, 
    isGridFull,
    anncounceWinner,
} from './game.js'; 

import './mystyle.css';

/*
function mark(ele){
    if (!gameOver && ele.firstChild !== null) {
        if (playerOneTurn) {
            ele.createTextNode('X');
            playerOneTurn = false;
            grid[`${ele.id}`] = 'X'; 
        }
        else {
            ele.createTextNode('O');
            playerOneTurn = true; 
            grid[`${ele.id}`] = 'O'; 
        }
    }
}*/


function component() {
  const element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
    element.setAttribute('id', 'content')

  return element;
}

document.body.appendChild(component());

function sampleButton() {

    const element = document.createElement('div'); 
    const btn = document.createElement('button');
    btn.innerHTML = "Click me for a message";
    btn.onclick = printMe; 
    element.appendChild(btn);

    return element;
}
//document.body.appendChild(sampleButton());
function createHeader() {
    const element = document.createElement('div'); 
    const title = document.createElement('h1'); 
    title.innerHTML = 'Tic Tac Toe'; 
    const displayTurn = document.createElement('p'); 
    displayTurn.setAttribute('id', 'playerTurn');
    const button = document.createElement('button');
    button.innerHTML = "Start Over"; 
    element.appendChild(title)
    element.appendChild(displayTurn)
    element.appendChild(button)
    element.setAttribute('id', 'title_container');

    return element; 
}



function createGrid() {
    const container = document.createElement('div')
   /*
    const grid = '<span id="a1" class="square" onclick = "mark(this)"></span>' +
        '<span id="b1" class="square" onclick = "mark(this)"></span >' +
        '<span id="c1" class="square" onclick = "mark(this)" ></span>' +
        '<span id="a2" class="square" onclick = "mark(this)" ></span>' +
        '<span id="b2" class="square" onclick = "mark(this)" ></span>' +
        '<span id="c2" class="square" onclick = "mark(this)" ></span>' +
        '<span id="a3" class="square" onclick = "mark(this)" ></span>' +
        '<span id="b3" class="square" onclick = "mark(this)" ></span>' +
        '<span id="c3" class="square" onclick = "mark(this)" ></span>'; */

     const grid = '<span id="a1" class="square"></span>' +
        '<span id="b1" class="square"></span >' +
        '<span id="c1" class="square"></span>' +
        '<span id="a2" class="square" ></span>' +
        '<span id="b2" class="square" ></span>' +
        '<span id="c2" class="square" ></span>' +
        '<span id="a3" class="square" ></span>' +
        '<span id="b3" class="square" ></span>' +
        '<span id="c3" class="square" ></span>'; 


    const gridLoad = document.getElementsByTagName('square'); 
    for (var i = 0; i < gridLoad.length; i++) {
        gridLoad[i].addEventListener('click', mark(gridLoad[i]))
    }

    container.setAttribute('id', 'container')
    container.innerHTML = grid;
    return container; 
}


//document.getElementById('content').appendChild(createHeader())
//document.getElementById('content').appendChild(createGrid())
//displayTurn(); 
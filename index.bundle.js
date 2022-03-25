"use strict";
(self["webpackChunkTicTacToe_webpack"] = self["webpackChunkTicTacToe_webpack"] || []).push([["index"],{

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTurn": () => (/* binding */ displayTurn),
/* harmony export */   "togglePlayerTurn": () => (/* binding */ togglePlayerTurn),
/* harmony export */   "refresh": () => (/* binding */ refresh),
/* harmony export */   "mark": () => (/* binding */ mark),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "isGridFull": () => (/* binding */ isGridFull),
/* harmony export */   "announceWinner": () => (/* binding */ announceWinner)
/* harmony export */ });
var startingGrid = {
  a1: '',
  b1: '',
  c1: '',
  a2: '',
  b2: '',
  c2: '',
  a3: '',
  b3: '',
  c3: ''
};
var grid = {
  a1: '',
  b1: '',
  c1: '',
  a2: '',
  b2: '',
  c2: '',
  a3: '',
  b3: '',
  c3: ''
};
var playerOneTurn = true;
var gameOver = false;
function displayTurn() {
  if (playerOneTurn) {
    document.getElementById('playerTurn').innerHTML = "It's player One's turn.";
  } else {
    document.getElementById('playerTurn').innerHTML = "It's player Two's turn.";
  }
}
var togglePlayerTurn = function togglePlayerTurn() {
  playerOneTurn = !playerOneTurn;
  displayTurn();
};
var refresh = function refresh() {
  var nodes = document.getElementsByClassName('square');

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].firstChild !== null) {
      nodes[i].removeChild(nodes[i].firstChild);
    }
  }

  playerOneTurn = true;
  grid = Object.assign({}, startingGrid);
  gameOver = false;
  displayTurn();
};
function mark(obj) {
  if (obj.firstChild === null && !gameOver) {
    if (playerOneTurn) {
      obj.innerHTML = "<span id = 'text'>X</text>";
      grid["".concat(obj.id)] = 'p1';
    } else {
      obj.innerHTML = "<span id = 'text'>O</text>";
      grid["".concat(obj.id)] = 'p2';
    }

    check();
    if (!gameOver) togglePlayerTurn();
  }
}
function position() {
  var nodes = document.getElementsByClassName('square');

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].firstChild !== null) {
      var width = nodes[i].offsetWidth;
      var height = nodes[i].offsetHeight;
      nodes[i].firstChild.style.paddingLeft = "".concat(width / 4, "px");
      nodes[i].firstChild.style.paddingTop = "".concat(height / 2, "px");
    }
  }
}
function check() {
  if (grid.a1 !== '' && grid.a1 === grid.b1 && grid.a1 === grid.c1) {
    announceWinner();
  } else if (grid.a2 !== '' && grid.a2 === grid.b2 && grid.a2 === grid.c2) {
    announceWinner();
  } else if (grid.a3 !== '' && grid.a3 === grid.b3 && grid.a3 === grid.c3) {
    announceWinner();
  } else if (grid.a1 !== '' && grid.a1 === grid.a2 && grid.a1 === grid.a3) {
    announceWinner();
  } else if (grid.b1 !== '' && grid.b1 === grid.b2 && grid.b1 === grid.b3) {
    announceWinner();
  } else if (grid.c1 !== '' && grid.c1 === grid.c2 && grid.c1 === grid.c3) {
    announceWinner();
  } else if (grid.a1 !== '' && grid.a1 === grid.b2 && grid.a1 === grid.c3) {
    announceWinner();
  } else if (grid.c1 !== '' && grid.c1 === grid.b2 && grid.c1 === grid.a3) {
    announceWinner();
  } else {
    if (isGridFull()) {
      document.getElementById('playerTurn').innerHTML = 'This round is a draw';
      gameOver = true;
    }
  }
}
function isGridFull() {
  var nodes = document.getElementsByClassName("square");

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].firstChild === null) {
      return false;
      break;
    }
  }

  return true;
}
function announceWinner() {
  var currentPlayer = '';

  if (playerOneTurn) {
    currentPlayer = 'Player One';
  } else {
    currentPlayer = 'Player Two';
  }

  var announce = currentPlayer + ' is the winner!';
  document.getElementById('playerTurn').innerHTML = announce;
  gameOver = true;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sampleprint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sampleprint.js */ "./src/sampleprint.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _mystyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mystyle.css */ "./src/mystyle.css");
 //import html from "./file.html";




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
  var element = document.createElement('div'); // Lodash, currently included via a script, is required for this line to work

  element.setAttribute('id', 'content');
  return element;
}

document.body.appendChild(component());

function sampleButton() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = "Click me for a message";
  btn.onclick = _sampleprint_js__WEBPACK_IMPORTED_MODULE_1__.printMe;
  element.appendChild(btn);
  return element;
} //document.body.appendChild(sampleButton());


function createHeader() {
  var element = document.createElement('div');
  var title = document.createElement('h1');
  title.innerHTML = 'Tic Tac Toe';
  var displayTurn = document.createElement('p');
  displayTurn.setAttribute('id', 'playerTurn');
  var button = document.createElement('button');
  button.innerHTML = "Start Over";
  element.appendChild(title);
  element.appendChild(displayTurn);
  element.appendChild(button);
  element.setAttribute('id', 'title_container');
  return element;
}

function createGrid() {
  var container = document.createElement('div');
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

  var grid = '<span id="a1" class="square"></span>' + '<span id="b1" class="square"></span >' + '<span id="c1" class="square"></span>' + '<span id="a2" class="square" ></span>' + '<span id="b2" class="square" ></span>' + '<span id="c2" class="square" ></span>' + '<span id="a3" class="square" ></span>' + '<span id="b3" class="square" ></span>' + '<span id="c3" class="square" ></span>';
  var gridLoad = document.getElementsByTagName('square');

  for (var i = 0; i < gridLoad.length; i++) {
    gridLoad[i].addEventListener('click', (0,_game_js__WEBPACK_IMPORTED_MODULE_2__.mark)(gridLoad[i]));
  }

  container.setAttribute('id', 'container');
  container.innerHTML = grid;
  return container;
} //document.getElementById('content').appendChild(createHeader())
//document.getElementById('content').appendChild(createGrid())
//displayTurn();

/***/ }),

/***/ "./src/sampleprint.js":
/*!****************************!*\
  !*** ./src/sampleprint.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printMe": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  alert("I am printed.");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mystyle.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\r\n}\r\n\r\n#container {\r\n    height: 90vh; \r\n    width: 90vh;\r\n    margin: 5px;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr 1fr; \r\n    grid-template-rows: 1fr 1fr 1fr; \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#a1, #b1, #c1, #a2, #b2, #c2, #a3, #b3, #c3 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid #000000;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    align-content: center !important;\r\n    text-align: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nspan#text {\r\n    align-content: center;\r\n    margin: 0 auto !important;\r\n    font-size: 180px;\r\n    display: inline-block;\r\n    vertical-align: middle !important;\r\n    justify-content: center;\r\n    font-family: 'Comic Sans MS'; \r\n}\r\n\r\n#title_container {\r\n    align-content: center;\r\n    text-align: center; \r\n}", "",{"version":3,"sources":["webpack://./src/mystyle.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,uBAAuB;IACvB,gCAAgC;IAChC,kBAAkB;IAClB,uBAAuB;;AAE3B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,gBAAgB;IAChB,qBAAqB;IACrB,iCAAiC;IACjC,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB","sourcesContent":["body {\r\n\r\n}\r\n\r\n#container {\r\n    height: 90vh; \r\n    width: 90vh;\r\n    margin: 5px;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr 1fr; \r\n    grid-template-rows: 1fr 1fr 1fr; \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#a1, #b1, #c1, #a2, #b2, #c2, #a3, #b3, #c3 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid #000000;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    align-content: center !important;\r\n    text-align: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nspan#text {\r\n    align-content: center;\r\n    margin: 0 auto !important;\r\n    font-size: 180px;\r\n    display: inline-block;\r\n    vertical-align: middle !important;\r\n    justify-content: center;\r\n    font-family: 'Comic Sans MS'; \r\n}\r\n\r\n#title_container {\r\n    align-content: center;\r\n    text-align: center; \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/mystyle.css":
/*!*************************!*\
  !*** ./src/mystyle.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mystyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaWNUYWNUb2Utd2VicGFjay8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vc3JjL3NhbXBsZXByaW50LmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vc3JjL215c3R5bGUuY3NzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UaWNUYWNUb2Utd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vc3JjL215c3R5bGUuY3NzP2RkNTAiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RpY1RhY1RvZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qgc3RhcnRpbmdHcmlkID0ge1xyXG4gICAgYTE6ICcnLFxyXG4gICAgYjE6ICcnLFxyXG4gICAgYzE6ICcnLFxyXG4gICAgYTI6ICcnLFxyXG4gICAgYjI6ICcnLFxyXG4gICAgYzI6ICcnLFxyXG4gICAgYTM6ICcnLFxyXG4gICAgYjM6ICcnLFxyXG4gICAgYzM6ICcnLFxyXG59XHJcblxyXG52YXIgZ3JpZCA9IHtcclxuICAgIGExOiAnJyxcclxuICAgIGIxOiAnJyxcclxuICAgIGMxOiAnJyxcclxuICAgIGEyOiAnJyxcclxuICAgIGIyOiAnJyxcclxuICAgIGMyOiAnJyxcclxuICAgIGEzOiAnJyxcclxuICAgIGIzOiAnJyxcclxuICAgIGMzOiAnJyxcclxufVxyXG5cclxudmFyIHBsYXllck9uZVR1cm4gPSB0cnVlO1xyXG52YXIgZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VHVybigpIHtcclxuICAgIGlmIChwbGF5ZXJPbmVUdXJuKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclR1cm4nKS5pbm5lckhUTUwgPSBcIkl0J3MgcGxheWVyIE9uZSdzIHR1cm4uXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyVHVybicpLmlubmVySFRNTCA9IFwiSXQncyBwbGF5ZXIgVHdvJ3MgdHVybi5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVBsYXllclR1cm4gPSAoKSA9PiB7XHJcbiAgICBwbGF5ZXJPbmVUdXJuID0gIXBsYXllck9uZVR1cm47XHJcbiAgICBkaXNwbGF5VHVybigpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3F1YXJlJylcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobm9kZXNbaV0uZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2Rlc1tpXS5yZW1vdmVDaGlsZChub2Rlc1tpXS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcclxuICAgIGdyaWQgPSBPYmplY3QuYXNzaWduKHt9LCBzdGFydGluZ0dyaWQpXHJcbiAgICBnYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgZGlzcGxheVR1cm4oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmsob2JqKSB7XHJcbiAgICBpZiAob2JqLmZpcnN0Q2hpbGQgPT09IG51bGwgJiYgIWdhbWVPdmVyKSB7XHJcbiAgICAgICAgaWYgKHBsYXllck9uZVR1cm4pIHtcclxuICAgICAgICAgICAgb2JqLmlubmVySFRNTCA9IFwiPHNwYW4gaWQgPSAndGV4dCc+WDwvdGV4dD5cIjtcclxuICAgICAgICAgICAgZ3JpZFtgJHtvYmouaWR9YF0gPSAncDEnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iai5pbm5lckhUTUwgPSBcIjxzcGFuIGlkID0gJ3RleHQnPk88L3RleHQ+XCI7XHJcbiAgICAgICAgICAgIGdyaWRbYCR7b2JqLmlkfWBdID0gJ3AyJztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrKCk7XHJcbiAgICAgICAgaWYgKCFnYW1lT3ZlcilcclxuICAgICAgICAgICAgdG9nZ2xlUGxheWVyVHVybigpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3F1YXJlJyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5vZGVzW2ldLmZpcnN0Q2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBub2Rlc1tpXS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gbm9kZXNbaV0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBub2Rlc1tpXS5maXJzdENoaWxkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7d2lkdGggLyA0fXB4YDtcclxuICAgICAgICAgICAgbm9kZXNbaV0uZmlyc3RDaGlsZC5zdHlsZS5wYWRkaW5nVG9wID0gYCR7aGVpZ2h0IC8gMn1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2soKSB7XHJcbiAgICBpZiAoZ3JpZC5hMSAhPT0gJycgJiYgZ3JpZC5hMSA9PT0gZ3JpZC5iMSAmJiBncmlkLmExID09PSBncmlkLmMxKSB7XHJcbiAgICAgICAgYW5ub3VuY2VXaW5uZXIoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGdyaWQuYTIgIT09ICcnICYmIGdyaWQuYTIgPT09IGdyaWQuYjIgJiYgZ3JpZC5hMiA9PT0gZ3JpZC5jMikgeyBhbm5vdW5jZVdpbm5lcigpOyB9XHJcbiAgICBlbHNlIGlmIChncmlkLmEzICE9PSAnJyAmJiBncmlkLmEzID09PSBncmlkLmIzICYmIGdyaWQuYTMgPT09IGdyaWQuYzMpIHsgYW5ub3VuY2VXaW5uZXIoKTsgfVxyXG4gICAgZWxzZSBpZiAoZ3JpZC5hMSAhPT0gJycgJiYgZ3JpZC5hMSA9PT0gZ3JpZC5hMiAmJiBncmlkLmExID09PSBncmlkLmEzKSB7IGFubm91bmNlV2lubmVyKCk7IH1cclxuICAgIGVsc2UgaWYgKGdyaWQuYjEgIT09ICcnICYmIGdyaWQuYjEgPT09IGdyaWQuYjIgJiYgZ3JpZC5iMSA9PT0gZ3JpZC5iMykgeyBhbm5vdW5jZVdpbm5lcigpOyB9XHJcbiAgICBlbHNlIGlmIChncmlkLmMxICE9PSAnJyAmJiBncmlkLmMxID09PSBncmlkLmMyICYmIGdyaWQuYzEgPT09IGdyaWQuYzMpIHsgYW5ub3VuY2VXaW5uZXIoKTsgfVxyXG4gICAgZWxzZSBpZiAoZ3JpZC5hMSAhPT0gJycgJiYgZ3JpZC5hMSA9PT0gZ3JpZC5iMiAmJiBncmlkLmExID09PSBncmlkLmMzKSB7IGFubm91bmNlV2lubmVyKCk7IH1cclxuICAgIGVsc2UgaWYgKGdyaWQuYzEgIT09ICcnICYmIGdyaWQuYzEgPT09IGdyaWQuYjIgJiYgZ3JpZC5jMSA9PT0gZ3JpZC5hMykgeyBhbm5vdW5jZVdpbm5lcigpOyB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoaXNHcmlkRnVsbCgpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJUdXJuJykuaW5uZXJIVE1MID0gJ1RoaXMgcm91bmQgaXMgYSBkcmF3JztcclxuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0dyaWRGdWxsKCkge1xyXG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3F1YXJlXCIpXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChub2Rlc1tpXS5maXJzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbm5vdW5jZVdpbm5lcigpIHtcclxuICAgIGxldCBjdXJyZW50UGxheWVyID0gJyc7XHJcbiAgICBpZiAocGxheWVyT25lVHVybikge1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAnUGxheWVyIE9uZSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ1BsYXllciBUd28nO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYW5ub3VuY2UgPSBjdXJyZW50UGxheWVyICsgJyBpcyB0aGUgd2lubmVyISc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyVHVybicpLmlubmVySFRNTCA9IGFubm91bmNlO1xyXG4gICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuLy9pbXBvcnQgaHRtbCBmcm9tIFwiLi9maWxlLmh0bWxcIjtcclxuaW1wb3J0IHsgcHJpbnRNZSB9IGZyb20gJy4vc2FtcGxlcHJpbnQuanMnOyBcclxuaW1wb3J0IHtcclxuICAgIGRpc3BsYXlUdXJuLFxyXG4gICAgdG9nZ2xlUGxheWVyVHVybiwgXHJcbiAgICByZWZyZXNoLCBcclxuICAgIG1hcmssXHJcbiAgICBwb3NpdGlvbixcclxuICAgIGNoZWNrLCBcclxuICAgIGlzR3JpZEZ1bGwsXHJcbiAgICBhbm5jb3VuY2VXaW5uZXIsXHJcbn0gZnJvbSAnLi9nYW1lLmpzJzsgXHJcblxyXG5pbXBvcnQgJy4vbXlzdHlsZS5jc3MnO1xyXG5cclxuLypcclxuZnVuY3Rpb24gbWFyayhlbGUpe1xyXG4gICAgaWYgKCFnYW1lT3ZlciAmJiBlbGUuZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXJPbmVUdXJuKSB7XHJcbiAgICAgICAgICAgIGVsZS5jcmVhdGVUZXh0Tm9kZSgnWCcpO1xyXG4gICAgICAgICAgICBwbGF5ZXJPbmVUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdyaWRbYCR7ZWxlLmlkfWBdID0gJ1gnOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jcmVhdGVUZXh0Tm9kZSgnTycpO1xyXG4gICAgICAgICAgICBwbGF5ZXJPbmVUdXJuID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIGdyaWRbYCR7ZWxlLmlkfWBdID0gJ08nOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgLy8gTG9kYXNoLCBjdXJyZW50bHkgaW5jbHVkZWQgdmlhIGEgc2NyaXB0LCBpcyByZXF1aXJlZCBmb3IgdGhpcyBsaW5lIHRvIHdvcmtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuZnVuY3Rpb24gc2FtcGxlQnV0dG9uKCkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGZvciBhIG1lc3NhZ2VcIjtcclxuICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTsgXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhbXBsZUJ1dHRvbigpKTtcclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnVGljIFRhYyBUb2UnOyBcclxuICAgIGNvbnN0IGRpc3BsYXlUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyBcclxuICAgIGRpc3BsYXlUdXJuLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyVHVybicpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTdGFydCBPdmVyXCI7IFxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVR1cm4pXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZV9jb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDsgXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgIC8qXHJcbiAgICBjb25zdCBncmlkID0gJzxzcGFuIGlkPVwiYTFcIiBjbGFzcz1cInNxdWFyZVwiIG9uY2xpY2sgPSBcIm1hcmsodGhpcylcIj48L3NwYW4+JyArXHJcbiAgICAgICAgJzxzcGFuIGlkPVwiYjFcIiBjbGFzcz1cInNxdWFyZVwiIG9uY2xpY2sgPSBcIm1hcmsodGhpcylcIj48L3NwYW4gPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImMxXCIgY2xhc3M9XCJzcXVhcmVcIiBvbmNsaWNrID0gXCJtYXJrKHRoaXMpXCIgPjwvc3Bhbj4nICtcclxuICAgICAgICAnPHNwYW4gaWQ9XCJhMlwiIGNsYXNzPVwic3F1YXJlXCIgb25jbGljayA9IFwibWFyayh0aGlzKVwiID48L3NwYW4+JyArXHJcbiAgICAgICAgJzxzcGFuIGlkPVwiYjJcIiBjbGFzcz1cInNxdWFyZVwiIG9uY2xpY2sgPSBcIm1hcmsodGhpcylcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImMyXCIgY2xhc3M9XCJzcXVhcmVcIiBvbmNsaWNrID0gXCJtYXJrKHRoaXMpXCIgPjwvc3Bhbj4nICtcclxuICAgICAgICAnPHNwYW4gaWQ9XCJhM1wiIGNsYXNzPVwic3F1YXJlXCIgb25jbGljayA9IFwibWFyayh0aGlzKVwiID48L3NwYW4+JyArXHJcbiAgICAgICAgJzxzcGFuIGlkPVwiYjNcIiBjbGFzcz1cInNxdWFyZVwiIG9uY2xpY2sgPSBcIm1hcmsodGhpcylcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImMzXCIgY2xhc3M9XCJzcXVhcmVcIiBvbmNsaWNrID0gXCJtYXJrKHRoaXMpXCIgPjwvc3Bhbj4nOyAqL1xyXG5cclxuICAgICBjb25zdCBncmlkID0gJzxzcGFuIGlkPVwiYTFcIiBjbGFzcz1cInNxdWFyZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAnPHNwYW4gaWQ9XCJiMVwiIGNsYXNzPVwic3F1YXJlXCI+PC9zcGFuID4nICtcclxuICAgICAgICAnPHNwYW4gaWQ9XCJjMVwiIGNsYXNzPVwic3F1YXJlXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImEyXCIgY2xhc3M9XCJzcXVhcmVcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImIyXCIgY2xhc3M9XCJzcXVhcmVcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImMyXCIgY2xhc3M9XCJzcXVhcmVcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImEzXCIgY2xhc3M9XCJzcXVhcmVcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImIzXCIgY2xhc3M9XCJzcXVhcmVcIiA+PC9zcGFuPicgK1xyXG4gICAgICAgICc8c3BhbiBpZD1cImMzXCIgY2xhc3M9XCJzcXVhcmVcIiA+PC9zcGFuPic7IFxyXG5cclxuXHJcbiAgICBjb25zdCBncmlkTG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcXVhcmUnKTsgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyaWRMb2FkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZExvYWRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYXJrKGdyaWRMb2FkW2ldKSlcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKVxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGdyaWQ7XHJcbiAgICByZXR1cm4gY29udGFpbmVyOyBcclxufVxyXG5cclxuXHJcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcclxuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUdyaWQoKSlcclxuLy9kaXNwbGF5VHVybigpOyAiLCJleHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcclxuICAgIGFsZXJ0KFwiSSBhbSBwcmludGVkLlwiKVxyXG5cclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7IFxcclxcbiAgICB3aWR0aDogOTB2aDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjsgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNhMSwgI2IxLCAjYzEsICNhMiwgI2IyLCAjYzIsICNhMywgI2IzLCAjYzMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5zcGFuI3RleHQge1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJzsgXFxyXFxufVxcclxcblxcclxcbiN0aXRsZV9jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9teXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7QUFFQTs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7IFxcclxcbiAgICB3aWR0aDogOTB2aDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjsgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNhMSwgI2IxLCAjYzEsICNhMiwgI2IyLCAjYzIsICNhMywgI2IzLCAjYzMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5zcGFuI3RleHQge1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJzsgXFxyXFxufVxcclxcblxcclxcbiN0aXRsZV9jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXlzdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215c3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJzdGFydGluZ0dyaWQiLCJhMSIsImIxIiwiYzEiLCJhMiIsImIyIiwiYzIiLCJhMyIsImIzIiwiYzMiLCJncmlkIiwicGxheWVyT25lVHVybiIsImdhbWVPdmVyIiwiZGlzcGxheVR1cm4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidG9nZ2xlUGxheWVyVHVybiIsInJlZnJlc2giLCJub2RlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiT2JqZWN0IiwiYXNzaWduIiwibWFyayIsIm9iaiIsImlkIiwiY2hlY2siLCJwb3NpdGlvbiIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsImFubm91bmNlV2lubmVyIiwiaXNHcmlkRnVsbCIsImN1cnJlbnRQbGF5ZXIiLCJhbm5vdW5jZSIsIl8iLCJwcmludE1lIiwiYW5uY291bmNlV2lubmVyIiwiY29tcG9uZW50IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzYW1wbGVCdXR0b24iLCJidG4iLCJvbmNsaWNrIiwiY3JlYXRlSGVhZGVyIiwidGl0bGUiLCJidXR0b24iLCJjcmVhdGVHcmlkIiwiY29udGFpbmVyIiwiZ3JpZExvYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=
import React, { useState } from 'react';
import './App.css';
import { isNil } from 'lodash';

function Square(props){
  return (
    <button
      className={"square " + props.className}
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

function Board(props) {
  const [arr] = useState([0, 1, 2]);

  const renderSquare = (i) => {
    let className = props.lines.includes(i) ? 'square-win ' : ''
    if (props.squares[i] && props.squares[i] === 'X' && !isNil(props.lastX) && props.lastX === i) {
      className += 'square-x'
    }
    if (props.squares[i] && props.squares[i] === 'O' && !isNil(props.lastO) && props.lastO === i) {
      className += 'square-o'
    }
    return (
      <Square
        className={className}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }

  const element = arr.map(value => 
    <div key={value} className="board-row">
      {renderSquare(value * 3)}
      {renderSquare(value * 3 + 1)}
      {renderSquare(value * 3 + 2)}
    </div>
  )
  return (
    <div>
      {element}
    </div>
  );
}

export default function App() {
  const [state, setState] = useState({
    history: [{squares: Array(9).fill(null)}],
    stepNumber: 0,
    xIsNext: true,
    isStart: false,
    player: null,
    operatorClick: false,
    position: [],
    backStep: null,
    lastX: null,
    lastO: null
  })

  let handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let position
    if (!isNil(state.backStep)) {
      position = [...state.position.slice(0, state.backStep)]
    } else {
      position = [...state.position]
    }

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    position.push(i);
    setState(Object.assign({}, state, {
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
      position: position ,
      backStep: !isNil(state.backStep) ? null : state.backStep,
      lastX: squares[i] === 'X' ? i : state.lastX,
      lastO: squares[i] === 'O' ? i : state.lastO
    }));
  }

  let jumpTo = (step) => {
    setState(Object.assign({}, state, {
      stepNumber: step,
      xIsNext: state.operatorClick ? (step % 2) === 0 : (step % 2) !== 0,
      backStep: step
    }));
  }

  let startGame = () => {
    setState(Object.assign({}, state, {
      isStart: true
    }))
  }

  let setPlayer = (evt) => {
    let player = evt.target.value
    setState(Object.assign({}, state, {
      player: player,
      xIsNext: player === 'X',
      operatorClick: player === 'X',
      position: [],
      backStep: null,
      lastX: null,
      lastO: null
    }))
  }

  let resetGame = () => {
    setState(Object.assign({}, state, {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: state.player === 'X',
      position: [],
      backStep: null,
      lastX: null,
      lastO: null
    }))
  }

  let reselectPlayer = () => {
    setState(Object.assign({}, state, {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      isStart: false,
      player: null,
      operatorClick: false,
      position: [],
      backStep: null,
      lastX: null,
      lastO: null
    }))
  }

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  const position = state.position;
  const moves = history.map((step, move) => {
    let row = position[move - 1] < 3 ? 1 : (position[move - 1] < 6 ? 2 : 3)
    let col = position[move - 1] % 3 === 0 ? 1 : position[move - 1] % 3 + 1
    const desc = move ?
      'Go to move #' + move + ' (' + row + ',' + col + ')':
      'Go to game start (row, col)';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner.playerWinner;
  } else {
    if (history.length > 9) status = "No winner: X and O tied ";
    else status = "Next player: " + state.player;
  }

  let renderAreaPlay = () => {
    return (
      <div className="game-play">
        <div className="game-board">
          <Board
            lastX={state.lastX}
            lastO={state.lastO}
            lines={winner ? winner.lines : []}
            squares={current.squares}
            onClick={i => handleClick(i)}
          />
          <div className="game-about">
            <div className="item item-yellow">Player X</div>
            <div className="item item-green">Player O</div>
            <div className="item item-red">Player Winner</div>
          </div>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div className="game-reset">
          <p>Reset history</p>
          <button onClick={resetGame}>Reset</button>
        </div>
        <div className="game-reselect">
          <p>Re-select Players</p>
          <button onClick={reselectPlayer}>Re-select Players</button>
        </div>
      </div>
    );
  }

  let renderSelectPlayer = () => {
    return (
      <div className="game-player">
        <p className="game-player--title">Choose player start</p>
        <ul className="list-player" onChange={setPlayer}>
          <li className="player-item">
            <input type="radio" id="playerX" name="player" value="X"/>
            <label htmlFor="playerX">X</label>
          </li>
          <li className="player-item">
            <input type="radio" id="playerO" name="player" value="O"/>
            <label htmlFor="playerO">O</label>
          </li>
        </ul>
        <button disabled={!state.player} onClick={startGame}>Start Game</button>
      </div>
    )
  }

  return (
    <div className="game">
      { state.isStart ? renderAreaPlay() : renderSelectPlayer() }
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        playerWinner: squares[a],
        lines: lines[i]
      };
    }
  }
  return null;
}

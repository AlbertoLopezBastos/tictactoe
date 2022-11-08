
import './App.css';
import Cell from './components/Cell';
import {useState} from 'react';

function App() {

  const [turn, setTurn] = useState('x');
  const [values,setValues] = useState(Array(9).fill('')); 


  const checkWinner = (squares : any)=>{

    const combos = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal:[
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    
    Object.values(combos).forEach(combo => {
     
     combo.forEach(pattern =>{
  
      if (
        squares[pattern[0]] === '' ||
        squares[pattern[1]] === '' ||
        squares[pattern[2]] === '' 
      ) {
          return;
      } else if (
        squares[pattern[0]] === squares[pattern[1]] &&          
        squares[pattern[1]] === squares[pattern[2]] 
      ) {
        alert(`${turn} Wins!`);
        resetGame()
      }
     }); 
    });
  };

  const handleClick = (num :any) => {

    if(values[num] !== ''){
      alert('already clicked!');
      return;
    };

    turn === 'x' ? setTurn('o') : setTurn('x');

    const squares = [...values];
    squares[num] = turn;
    
    setValues(squares);
    checkWinner(squares);
  }

  const resetGame = () => {
    setValues(Array(9).fill(''))
    setTurn('x');
  };

  return (
    <div className="app">
      <h1 className='title'>Tic Tac Toe</h1>
      <span className='turn'>Turn: {turn}</span>
      <table>
        <tbody>
          <tr>
            <Cell handleClick={handleClick} num={0} value={values[0]}/>
            <Cell handleClick={handleClick} num={1} value={values[1]}/>
            <Cell handleClick={handleClick} num={2} value={values[2]}/>
          </tr>
          <tr>
            <Cell handleClick={handleClick} num={3} value={values[3]}/>
            <Cell handleClick={handleClick} num={4} value={values[4]}/>
            <Cell handleClick={handleClick} num={5} value={values[5]}/>
          </tr>     
          <tr>
            <Cell handleClick={handleClick} num={6} value={values[6]}/>
            <Cell handleClick={handleClick} num={7} value={values[7]}/>
            <Cell handleClick={handleClick} num={8} value={values[8]}/>
          </tr>
        </tbody>
      </table>
      <button className='button' onClick={()=> resetGame()}>Restart</button>
    </div>
  );
}

export default App;

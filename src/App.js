import './App.css';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      
    </div>
  );
}

function MyButton({ count, onClick }) {
return (
    <button onClick={onClick}>
      Clicked {count} times June 11, 2024
    </button>
  );
  
}

export default App;

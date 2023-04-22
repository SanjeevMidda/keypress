import { useState } from 'react';
import './index.css';

function App() {

  let area = {
    transform: `translate(20px, 520px)`,
  }
  const [location, setLocation] = useState(area)

  function move(e){
    console.log(e);
    setLocation({transform: `translate(${e.clientX}px, ${e.clientY}px)`});
  }

  return (
    <div className="App" onClick={move}>
    <div className="box" style={location}>🐭</div>
    </div>
  );
}

export default App;

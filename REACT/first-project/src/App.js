import './App.css';
import Link from './Link';
import { Counter } from './Counter';

function App() {

  const obj = {
    name: "Pasquale",
    lastname: "Cannavacciuolo"
  };

  return (
    <div className="App">
      <Link obj={obj} />
      <Counter />
    </div>
  );
}

export default App;

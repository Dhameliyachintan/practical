import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Categorydata from './component/Categorydata';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './component/TodoList';
import ToggleMessage from './component/Canditinal';
import Countries from './component/Countries';
import Changecolor from './component/Changecolor';
// import Closure from './components/Closure';
// import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App">
      {/* <Closure /> */}
      {/* <UseEffect /> */}
      <Menu />
      <Categorydata />
      {/* <TodoList /> */}
      {/* <ToggleMessage /> */}
      <Countries />
      {/* <Changecolor/> */}
    </div>
  );
}

export default App;

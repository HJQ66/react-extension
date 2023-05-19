import './App.css';
import Demo from './components/3_hooks';
function App(props) {
  return (
    <div>
      <Demo root = {props.root}/>
    </div>
  );
}

export default App;

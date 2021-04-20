import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
  return (
    <>
    <div className="App">
     <Home />
    </div>
      <div className="add-to-home-div">
      <button className="btn btn-outline-info">Add hodlinfo to home screen</button>
    </div>
  </>
  );
}

export default App;

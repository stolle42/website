import './App.css';

function App() {
  var rand=Math.random()*100
  return (
    <div className="App">
      <div className="content">
        <h1>Hello world</h1>
        <p>Random number: {rand}</p>
      </div>
    </div>
  );
}

export default App;

import './App.css'; //import styling
import Navbar from './Navbar';
import SimpleComponent from './buttonComponent';
import opa from './miladsopa.png';

function App() //java script function defining a component
{
  //here you can add java script code if you need it
  var rand=Math.random()*100
  return (
    <div className="App">
      <Navbar/>
      <div>
        <h1>Hello world</h1>
        <p>Random number: {rand}</p>
        <img src={opa} alt="nothing" />
      </div>
      <SimpleComponent/>
      <SimpleComponent/>
    </div>
  );
}
export default App;//export function, so react can use it

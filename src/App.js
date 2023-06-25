import './App.css';
import { Test } from './components/Test';
import { TestProp } from './components/TestProp';

function App() {
  return (
    <div className="App">
      <Test />
      <TestProp bool="Yes" />
      
    </div>
  );
}

export default App;

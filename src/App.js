import { useContext } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { AuthContext } from './context/AuthContext';

function App() {
  const [state] = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      {!state.isAuth && <h1>Please Login and enjoy</h1>}
      {state.isAuth && <div>
        <h1> Welcome <img src='https://www.dictionary.com/e/wp-content/uploads/2018/02/Folded-Hands.png' alt='joinig' style={{ height:"40px" }}/> </h1>
        <h2>Here is your Token :- </h2> 
        <h2>
          {state.token}
        </h2>
      </div>}
    </div>
  );
}

export default App;

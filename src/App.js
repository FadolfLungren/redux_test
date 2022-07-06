import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.app.cash)

  const getCash = ()=>{
    dispatch({type:'GET',payload:5})
  }
  const addCash = ()=>{
    dispatch({type:'ADD',payload:5})
  }

  return (
    <div className="App">
      <div style={{fontSize:'1.2'}}>{cash}</div>
      <div style={{display:'flex'}}>
        <button onClick={()=> addCash()}>Пополнить</button>
        <button onClick={()=> getCash()}>Снять</button>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Second from './Second';
import Third from './Third';
import {createStore} from 'redux';
// lets create a central store to access that name property in both second & third component without passing it as props
const initialState={name:"harsh"}
// we need to pass initialState as state value in reducer
const reducer = (state=initialState,action)=>{
  console.log(state,action)
  // now we can change the state value according to action type
  // switch(action.type)
  // {
  //   case "CHAPRI":
  //   return {...state,name:action.payload}
  //   break
  //   case "PLAYBOY":
  //   return {...state,name:action.payload}
  //   break
  //   case "CHAPRI":
  //   return {...state,name:action.payload}
  //   break

  // }
  

   return {...state,name:action.payload}
}

export const store = createStore(reducer)

function App(props) {
  return (
    <div> 

    <Second/>
    <Third/>
    </div>
  );
}


export default App;

import './App.css';
// now for accessing the props using HOC we need to craete a mapstatetoprop method(named by convention) & pass out componet and this method to connect
import {connect} from 'react-redux';
function Second(props) {

  return (
    <div>
    <h1>Second component {JSON.stringify(props.mystate)}</h1>
    <button onClick={()=>props.changeName("CHAPRI",'King_Harsh')}>Chapri style</button>
     <button onClick={()=>props.changeName("PLAYBOY","Diljala_Harsh")}>Playboy style</button>
      <button onClick={()=>props.changeName("FAKE","Angel Priya")}>Fake style</button>
    </div>
  );
}

const mapStateTpProps = (state)=>{
  return{
    mystate:state
  }
}

// now lets update the name value by dispatching an action

// here we are immediately dispatching an action lets store it as function expression
const mapDispatchToProps=(dispatch=>{
  return{
    changeName:(type,payload)=>{dispatch({
    type,
    payload
  })}
}
})
export default connect(mapStateTpProps,mapDispatchToProps)(Second);
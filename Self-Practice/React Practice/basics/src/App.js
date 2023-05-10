import { useState } from "react";

function SuperHeros(){
  const [heros,setHero]=useState(["Superman","Spiderman","Ironman"])

  const [name, setName]=useState(()=>"antman")

  const onAddName=()=>{
    setHero([...heros,name])
    setName("")
  }
  return(
    <div>
      <ul>
        {heros.map((h)=>(
          <li key={h}>{h}</li>)
          )
        }
      </ul>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={onAddName}>Add Value</button>
    </div>
  )
}

function Counter(){
  let [count, setCount]=useState(1); 
  //by using the useState method which is given by react to solve the problem to call by value/reference problem
  //count is equal to usestate value and setCount is used to update the count value

  function oneup(){  //defining seperate function to increment the count
    setCount(count + 1); 
    //setState/setCount (it is a function) is used to avoid the call by value/reference problems and used to update the initial value of useState
  }
  return(
    <div>
    <button onClick={oneup}>Count:{count}</button>
    </div>
  )
}

function App() {
  return (
  <>
  <h1>Hellow React</h1>
  <Counter />
  <Counter />
  <Counter />
  <SuperHeros/>
  {/* here the vitual dom creating differents copies in the same memory location   */}
  </>
  );
}


export default App; //only app function exported

import React,{useState} from "react";

function App() {
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  return (
    <div class="flex flex-col text-center gap-10 font-bold mt-20 border-2 border-orange-400 ">
    <div class="flex flex-col gap-5 text-[30px]">
    <h1>Hare Krishna</h1>
    <h2 class="text-orange-700">Counter App</h2>
    </div>
    <div>
      <p class="bg-zinc-300 w-[30px] ml-[750px]">{count}</p>
    </div>
    <div className="flex justify-center gap-4">
      <button onClick={increment} class="bg-blue-400 w-[30px] border-2 border-orange-700">+</button>
      <button onClick={decrement} class="bg-blue-400 w-[30px] border-2 border-orange-700">-</button>
    </div>
    </div>
  );
}

export default App;

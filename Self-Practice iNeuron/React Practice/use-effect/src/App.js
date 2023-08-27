import { useEffect, useState } from "react"
import Box from "./Box"
import Axios from 'axios'

function App(){
    const [details, setDetails]=useState({})

    const fetchDetails=async()=>{
        const {data}=await Axios.get('https://randomuser.me/api') 
        //here url is string but we can send more config ,{} and in this we can hit the api keys etc etc..
        console.log("RESPONSE", data);
        const details=data.results[0]
        setDetails(details) 
         //details is inside this scope only so setDetails can push it to global scope..
    }

    let list=["Abhi", "Abhijit", "kamaji"]

    useEffect(()=>{fetchDetails()},[])
    return(
        <>
        <div>App</div>
        <Box myname="Abhinandan" list={list} details={details}/>
        <button onClick={fetchDetails}>get details</button>
        </>
    )
}

export default App //export to index
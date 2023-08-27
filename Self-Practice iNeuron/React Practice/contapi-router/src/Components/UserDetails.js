import { useContext } from "react";
import { myContext } from "../App";

const UserDetails=()=>{
    const data=useContext(myContext);
    return(
        <div>My Name is : {data.name}</div>
    )
}

export default UserDetails;
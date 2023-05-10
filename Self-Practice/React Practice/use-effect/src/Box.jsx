

function Box({myname,list,details}){
    // console.log(props); //not in use due in box function we are directly destructuring it rather than usings props
    return(
        <>
        <p>this imported in app.js from box.js and from app.js to index.js and from index.js to document page of web</p>
        <div>{myname}</div>
        <h2>Gender-{details.gender}</h2>
        <h2>F. Name-{details.name?.first}</h2>
        <h3>Age-{details.dob?.age}</h3>
        <ul>
            {list.map(l=>(
                <li key={l}>{l}</li>
            ))}
        </ul>
        </>
    )
}

export default Box //export to app
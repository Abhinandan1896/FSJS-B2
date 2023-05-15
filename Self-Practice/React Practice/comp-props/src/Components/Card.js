function Comp({name}){
    return(
    <>
    <h3>thanku very much dear-{name}</h3> 
    
    </>)
}
//in above function we are getting names by using the destructure method
function Cards(props){
    return(
        <>
        <h2>Pamho--{props.name}</h2>
        <Comp name="Abhi"/>
        </>
    ) 
}
//in above function we are getting data by props concept

export default Cards

const btn=document.getElementById("bt")

//left hand side is meant for storing
//right hand side is meant for capturing the element from web page using document and id

const randomColor = () => {
    let val='0123456789ABCDEF';
    let cons='#';
    for(let i=0;i<6;i++){
        cons=cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
    console.log(randomColor());

function changerandomcolor(){
    document.body.style.backgroundColor=randomColor();
}
    
    btn.addEventListener("click",changerandomcolor);

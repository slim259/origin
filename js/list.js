const getRandomColor=()=>
    "#" +Math.floor(Math.random()*16777215).toString(16)
const clickColorElement=(element)=>{
    element.addEventListener(
        "click",(e)=>(e.target.style.color=getRandomColor())
    );
};
clickColorElement(document.querySelector("ol"));

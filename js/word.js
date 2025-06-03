const elements=document.querySelector("#data");
const para =document.querySelector("#para");
elements.addEventListener("change",(e)=>{
    para.style[e.target.id]=e.target.id=="font-size" ? e.target.value +"px" :e.target.value;
});
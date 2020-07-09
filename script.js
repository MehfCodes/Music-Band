 
 /* ============================================================================================================*/
/* ----------- Slide Show ------------*/
let counter=0;
const slideShow=()=>
{
    
   
    let slide=document.querySelector(".slide");
    let images=slide.querySelectorAll("img");
    for (const img of images){
    	img.style.display="none";
    }
    counter++;
    if(counter>images.length-1) counter=0;
    images[counter].style.display="block";
 
}
 setInterval(slideShow,2000);
document.querySelector("body").onload=slideShow;

/* ============================================================================================================*/



/* ============================================================================================================*/

/*------------ Toggle search Icon -------------*/
let searchBox=document.querySelector(".searcbox");
let closeItem=document.getElementById("two");
let icon=document.getElementById("one");
let changeClass=icon.querySelector("li");
let input=document.getElementById("search");

const open=()=>
{
    let widthValue=0;
    let search=()=>{
        input.style.display="block";
   
        if(widthValue>=190)
        {
            clearInterval(animation);
        }
        else
        {
            widthValue++;
            input.style.width=widthValue+"px";
        }
    }
    let animation=setInterval(search,1);
    
    icon.style.display="none";
    closeItem.style.display="flex";
}

const close=()=>
{
    let widthValue2=190;
    let afterSearch=()=>{
        if(widthValue2==0)
        {
            clearInterval(animation2);
        }
        else
        {
            widthValue2--;
            input.style.width=widthValue2+"px";
        }
    }
    let animation2=setInterval(afterSearch,1);
    
    icon.style.display="flex";
    closeItem.style.display="none";
    input.style.display="none";
}


/*--------------Events Listener-----------------*/

icon.addEventListener("click",open);
closeItem.addEventListener("click",close);


/* ============================================================================================================*/
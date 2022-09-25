var mynav = document.getElementById('nav');
window.onscroll =()=>{
    "use strict";
    if(document.body.scrollTop >= 200){
        mynav.classList.add('change-nav');
    }
    else{
        mynav.classList.remove('change-nav');
    }
}
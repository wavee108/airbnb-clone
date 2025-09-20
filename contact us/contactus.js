

window.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target === document.querySelector('.fa-bars')){
        document.querySelector('.dropdown').classList.add('showdropdown');
    }else{
        document.querySelector('.dropdown').classList.remove('showdropdown');
    }
});
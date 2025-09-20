function windSrcoll(){
    let headerEl = document.getElementById('Header-bar');
    let navListEl = document.querySelector('.navlist');
    let navLisEl = document.querySelector('.navlis');
    let searchEl = document.querySelector('.search');

    if(window.scrollY >= 200){
        headerEl.classList.add('sticky');
        navListEl.style.display = 'none';
        navLisEl.classList.add('showscrollsearch');
        searchEl.style.display = 'none';
        document.querySelectorAll('.sm-navbar-item i').forEach(e=>e.style.display = 'none');
    }else {
        headerEl.classList.remove('sticky');
        navListEl.style.display = 'block';
        navLisEl.classList.remove('showscrollsearch')
        searchEl.style.display = 'flex';
        document.querySelectorAll('.sm-navbar-item i').forEach(e=>e.style.display = 'block');

    }

}

window.addEventListener('scroll', windSrcoll);

document.querySelector('.leftdivicon').addEventListener('click',()=>{
    document.querySelector('.dropdown').classList.toggle('showdropdown')
});
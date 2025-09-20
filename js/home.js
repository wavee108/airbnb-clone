// ----------------------function to create the search sections on scroll------------------
function createSearchContent (){
    const textObj = {
        name1: 'Anywhere',
        name2: 'any time',
        name3: 'add guess'
    }


    const navDiv = document.querySelector('.navlis');
    const searchScroll = document.createElement('div');
    searchScroll.className ='search-scroll';
    const homeIconDiv = document.createElement('div');
    const homeIcon = document.createElement('i');
    homeIconDiv.className = 'homeicon';
    searchScroll.appendChild(homeIconDiv);

    for (let key in textObj){
        const searchDiv = document.createElement('div');
        const formDiv = document.createElement('div');
        const labelDiv = document.createElement('div');
        const h1 = document.createElement('h3');
    
    
        // add classes
        
        homeIcon.className = 'fa-solid fa-house'
        searchDiv.className = 'search-div'
        formDiv.className = 'form-div'
        labelDiv.className = 'label';
        
    
        h1.textContent = textObj[key];
    
        // apending element
        homeIconDiv.appendChild(homeIcon);
    
        labelDiv.appendChild(h1);
        formDiv.appendChild(labelDiv);
        searchDiv.appendChild(formDiv);
    
    
        
        searchScroll.appendChild(searchDiv);


    }

    const searchBtnDiv = document.createElement('div');
    const searchBtnDiv2 = document.createElement('button');
    const searchBtnIcon = document.createElement('i');
    
    searchBtnDiv.className = 'search-btn'
    searchBtnDiv2.className = 'search-btn2'
    searchBtnIcon.className = 'fa-solid fa-magnifying-glass';

    searchBtnDiv2.appendChild(searchBtnIcon);
    searchBtnDiv.appendChild(searchBtnDiv2);

    searchScroll.appendChild(searchBtnDiv)

    navDiv.appendChild(searchScroll)
}

createSearchContent()



//------------------------------ STICKY NAV HEADER BAR-----------------------------------

if(window.innerWidth <= 850){
        searchEl.style.display = 'none';
}
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
        document.querySelectorAll('.sm-navbar-item img').forEach(e=>e.style.display = 'none');
    }else {
        headerEl.classList.remove('sticky');
        navListEl.style.display = 'block';
        navLisEl.classList.remove('showscrollsearch')
        searchEl.style.display = 'flex';
        document.querySelectorAll('.sm-navbar-item img').forEach(e=>e.style.display = 'block');

    }

}

window.addEventListener('scroll', windSrcoll);

// --------------------------DROP DOWN MENU------------------------------------
window.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target === document.querySelector('.fa-bars')){
        document.querySelector('.dropdown').classList.add('showdropdown');
    }else{
        document.querySelector('.dropdown').classList.remove('showdropdown');
    }
});


//-------------------------------SLIDER SCRIPT----------------------------------------

// const sliderEl = document.querySelectorAll('.card_container');
// const sliderLength = document.querySelectorAll('.slide').length;
const sliderLength = 3;
const prevBtnEl = document.querySelectorAll('.prev');
const nextBtnEl = document.querySelectorAll('.next');
let currentIndex = 0;


function showSlide(index){
    if(index >= sliderLength){
        currentIndex = 0;
    }else if(index < 0){
        currentIndex = sliderLength - 1;
    }else {
        currentIndex = index;
    }

    // sliderEl.forEach((e)=>{e});
}

prevBtnEl.forEach((e)=>{e.addEventListener('click',(event)=>{
    showSlide(currentIndex - 1);
    event.currentTarget.parentElement.parentElement.parentElement.children[1].style.transform = `translateX(-${currentIndex * 15}%)`;
})});
nextBtnEl.forEach((e)=>{e.addEventListener('click',(event)=>{showSlide(currentIndex + 1);
    event.currentTarget.parentElement.parentElement.parentElement.children[1].style.transform = `translateX(-${currentIndex * 20}%)`;
})});


const cardEl = document.querySelectorAll('.card');
cardEl.forEach((card)=>{
    card.addEventListener('click', ()=>{
        window.location = 'room.html';
    })
});

// footer javascript

const uniqueBtn = document.getElementById('unique')
const travelBtn = document.getElementById('travel')
const friendBtn = document.getElementById("friend")
const uniqueConEl = document.getElementById('unique-con')
const travelConEl = document.getElementById('travel-con')
const friendConEl = document.getElementById('friend-con')

const footerNavEl = document.querySelector('.footer-nav')

footerNavEl.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target === uniqueBtn){
        uniqueBtn.classList.add('active')
        uniqueConEl.classList.add('show')
    }
    else{
        uniqueBtn.classList.remove("active")
        uniqueConEl.classList.remove('show')
        
    }
})

footerNavEl.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target === travelBtn){
        travelBtn.classList.add('active')
        travelConEl.classList.add('show')
    }
    else{
        travelBtn.classList.remove("active")
        travelConEl.classList.remove('show')
        
    }
})

footerNavEl.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target === friendBtn){
        friendBtn.classList.add('active')
        friendConEl.classList.add('show')
    }
    else{
        friendBtn.classList.remove("active")
        friendConEl.classList.remove('show')
        
    }
})

// if(e.target === travelBtn){
//         travelBtn.classList.add('active')
//     }else if(e.target === friendBtn){
//         friendBtn.classList.add('active')
//     }
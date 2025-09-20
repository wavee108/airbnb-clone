const logsignEl = document.querySelector('#logsignbtn');
const signcloseBtn = document.querySelector('.signup-close-btn')
const signSectionEl = document.querySelector('.signup-section');
const logoutBtnEl = document.querySelector('#logoutbtn');

logsignEl.addEventListener('click',(e)=>{
    if(e.target === e.target){
        e.stopPropagation()
        signSectionEl.classList.add('showsigunp');
        document.body.style.overflow = 'hidden';
    }
})



signcloseBtn.addEventListener('click',()=>{
    signSectionEl.classList.remove('showsigunp');
    document.body.style.overflow = 'auto';
})



const continueBtn = document.querySelector('#continue-sign');
const signupmainEl = document.querySelector('.signup-main');
const regmainel = document.querySelector('.signup-reg');
const signupcontainerEl = document.querySelector('.signup-container');
const signbackBtn = document.querySelector('.signup-back-btn');
const regBtn = document.querySelector('.reg-btn')

// localStorage.setItem('mode',JSON.stringify(isLogin))
// JSON.parse(localStorage.getItem('mode'))


let isLogin = JSON.parse(localStorage.getItem('mode'));


if(isLogin){
    updateProfile()
}

continueBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    if(document.getElementById('signup-phone').value !== ' ' && document.getElementById('signup-phone').value === localStorage.getItem('phoneID')){
        isLogin = true;
        updateProfile()
        localStorage.setItem('mode',JSON.stringify(isLogin));
        signSectionEl.classList.remove('showsigunp');
        document.body.style.overflow = 'auto';
    }else{
        signupmainEl.style.opacity = '0' ;
        signupmainEl.style.transform = 'translateY(-800px)';
        regmainel.style.transform = 'translateY(0)';
        signupcontainerEl.style.overflow = 'auto';
    }
});

signbackBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    signupmainEl.style.opacity = '1' ;
    signupmainEl.style.transform = 'translateY(0)';
    regmainel.style.transform = 'translateY(900px)';
    signupcontainerEl.style.overflow = 'hidden'
});



function signUp(){
    const emailInputValue = document.getElementById('email').value;
    const fnameInputValue = document.getElementById('fname').value;
    const lnameInputValue = document.getElementById('lname').value;
    const passInputValue = document.getElementById('pass').value;
    const dataInputValue = document.getElementById('date').value;
    const phoneInputValue = document.getElementById('signup-phone').value;

    const userData = {
        UserID : '01',
        fistName: fnameInputValue,
        lastName: lnameInputValue,
        emailID: emailInputValue,
        passWordID:passInputValue,
        dob:dataInputValue,
        phoneID: phoneInputValue,
    };

    if(emailInputValue !== ' '){
        localStorage.setItem('userID', userData.UserID)
        localStorage.setItem('firstnameID', userData.fistName)
        localStorage.setItem('lastnameID', userData.lastName)
        localStorage.setItem('emailID', userData.emailID)
        localStorage.setItem('passID', userData.passWordID)
        localStorage.setItem('phoneID', userData.phoneID)
        localStorage.setItem('mode',JSON.stringify(isLogin));
        isLogin = true;
        updateProfile();
        signSectionEl.classList.remove('showsigunp');
        document.body.style.overflow = 'auto';

    }
};

function updateProfile(){
    let localFName = localStorage.getItem('firstnameID').slice(0,1).toUpperCase()
    let localFNameFull = localStorage.getItem('firstnameID')
    const profileIcon = document.getElementById('profile');
    const bannerNameEl = document.getElementById('banner-name');
    if(isLogin){
        profileIcon.style.backgroundColor = 'lightblue';
        profileIcon.innerHTML = `<span>${localFName}</span>`;
        logsignEl.style.display = 'none';
        logoutBtnEl.style.display = 'block';
        if(profileIcon.classList.contains('profile-icon')){
            bannerNameEl.innerText = localFNameFull;
        }

    }else{
        profileIcon.style.backgroundColor = 'transparent';
        if(profileIcon.classList.contains('profile-icon')){
            profileIcon.innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 30px;"></i>`;
            bannerNameEl.innerText = "";
        }else{
            profileIcon.innerHTML = `<i class="fa-solid fa-globe"></i>`;
            console.log(profileIcon.classList);
        }
        logsignEl.style.display = 'block';
        logoutBtnEl.style.display = 'none';

    }
}


regBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    signUp();
});



logoutBtnEl.addEventListener('click', (e)=>{
    e.stopPropagation()
    isLogin = false;
    localStorage.setItem('mode',JSON.stringify(isLogin));
    updateProfile()
});

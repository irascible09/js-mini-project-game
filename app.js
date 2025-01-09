let gameseq = [];
let userseq = [];
let color = ['red','yellow','green','purple']

let started = false;
let level = 0;

let h2 = document.querySelector('h2');



function btnflash (randbtn) {
    // kuch sec k liye background color white 
    //console.log("flashed")
    
    
    randbtn.classList.add('flash');
    void randbtn.offsetWidth;
    setTimeout( function () { randbtn.classList.remove('flash')}, 200);
    
    
}

function levelup () {
    userseq=[];
    
    level++;
    h2.innerText = `Level ${level}`; // level badhwa diya 
    
    // button select kro random
    let randIndex = Math.floor(Math.random()*4);
    let randColor = color[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    
    //console.log(randColor, randbtn);
    // button flash kro
    gameseq.push(randColor);
    console.log(gameseq);
    
    btnflash(randbtn);
    
    
    
}

document.addEventListener('keypress', function(){
    
    if (started ==  false) {
    started = true;
    console.log("game started");


    levelup();

}
});

function checkans (idx) {

    
    if (userseq[idx]===gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup,750);
        }
    }
    else {
        h2.innerText = `game over your score is ${level}, press any key to start`;
        reset();
    }

}

function btnpress ( ) {

    //console.log("button was pressed");
    //console.log(this);
    btnflash(this);

    let usercolor = this.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);

}

let btns = document.querySelectorAll('.box')

for (box of btns) {

    box.addEventListener('click', btnpress);

}

function reset () {
    started = false;
    level = 0;
    userseq = [];
    gameseq = [];
}



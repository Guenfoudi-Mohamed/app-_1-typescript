// app slider

// set event for angle-left & angle-right
const sliderContainer = document.querySelector('body #container #slider .sliderContainer') as HTMLDivElement;
const NumberOfChildElement : number = 3;
let counterMoveSlider : number = 0;
let counter : number = 0;
let counterCase : number = 0;
let bool : boolean = false;
let  numNextAddSlid : number = NumberOfChildElement;
const  numPreviousAddSlid : number = -1;
let  num : number = 0;


// angle Left
const angleLeft = document.querySelector('body #container #slider .icon.angle-left') as HTMLAnchorElement;
angleLeft.addEventListener('click',function(){
    counter--;
    counterCase--;
    console.log(`counter >> `,counter);
    if(counterCase<0){
        counterCase=(3-1);
    }
    if(counter>0){console.log(true);
        sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${counter}))`);
    }
    else if(counter === numPreviousAddSlid){
        counter = 0;
        numNextAddSlid = (sliderContainer.childElementCount+1);
        setNewSlid(counterCase,'previous');
        sliderContainer.style.setProperty('transition',`0s`);
        sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${1}))`);
        setTimeout(function(){
            sliderContainer.style.setProperty('transition',`500ms`);
            sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${0}))`);
        },100);
    }else if(counter === 0){
        console.log('counter ',counter,' counterCase ',counterCase,true);
        sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${0}))`);
    }
    checkBgBars(counterCase);
});
// angle Right
const angleRight = document.querySelector('body #container #slider .icon.angle-right') as HTMLAnchorElement;
angleRight.addEventListener('click',function(){
    counter++;
    counterCase++;
    console.log(`counter >> `,counter);
    if(counterCase>=NumberOfChildElement){
        counterCase=0;
    }
    if(counter > 0 && counter != numNextAddSlid){
        sliderContainer.style.setProperty('transition',`500ms`);
        sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${counter}))`);
    }
    else if(counter  === numNextAddSlid){
        numNextAddSlid++;
        setNewSlid(counterCase,'next');
        sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${counter}))`);
    }
    // else if(counter>counterCase){
    //     sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${counter}))`);
    // }
    // else if(counter === 0 && counterCase==0){
    //     sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${1}))`);
    // }
    else if(counter === 0){
        // sliderContainer.style.setProperty('transform',`translateX(calc(100%  * -${1}))`);
        console.log(true)
    }
    checkBgBars(counterCase);
});


// fill the arrNodesSlid
const arr : Node[] = [];
for(let i = 0;i<NumberOfChildElement;i++){
    const node = sliderContainer.children[i];
    const element = node.cloneNode(true);
    arr.push(element);
}

// function set new slid
function setNewSlid(countValue:number,strPN:string){
    switch(strPN){
        case 'next':
            const nodeNext = arr[countValue];
            const elementNext = nodeNext.cloneNode(true);
            sliderContainer.appendChild(elementNext);
            break;
        case 'previous':
            const nodePrevious = arr[countValue];
            const elementPrevious = nodePrevious.cloneNode(true);
            sliderContainer.insertBefore(elementPrevious,sliderContainer.children[0]);
            break;
    }
}

// function for check background color bars
function checkBgBars(counterBar:number) : void{
    const bars = document.querySelectorAll('body #container #slider .bars .bar') as NodeListOf<HTMLButtonElement>; 
    for(let i : number = 0;i<bars.length;i++){
        if(i === counterBar){
            bars[i].classList.add('active');
        }
        else{
            bars[i].classList.remove('active');
        }
    }
}

// event for bars 
const bars = document.querySelectorAll('body #container #slider .bars .bar') as NodeListOf <HTMLButtonElement>;
bars.forEach(function(element,index,arr){
    element.addEventListener('click',function(){
        let bool : boolean = false;
        let stockClassOldBar : number = 0;
        for(let i : number = 0 ;i<arr.length;i++){
            bool = bars[i].classList.contains('active');
            if(bool){
                stockClassOldBar = i;
                break;
            }
        }
        console.log(stockClassOldBar,index);
        switch(stockClassOldBar){
            case 0:
                if(index === 1){
                    angleRight.click();
                }
                if(index === 2){
                    angleLeft.click();
                }
                break;
            case 1:
                if(index === 0){
                    angleLeft.click();
                }
                if(index === 2){
                    angleRight.click();
                }
                break;
            case 2:
                if(index === 0){
                    angleRight.click();
                }
                if(index === 1){
                    angleLeft.click();
                }
                break;
        }
    });
});

// event for window
window.addEventListener('DOMContentLoaded',function(){
    const NumClickRandom : number = Math.floor(Math.random() * 3);
    switch(NumClickRandom){
        case 0: break;
        case 1: angleRight.click(); break;
        case 2: angleRight.click();angleRight.click(); break;
    }
    console.log(NumClickRandom ,'random');
});
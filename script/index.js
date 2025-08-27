function getCardBtn (classname){
    const classListBtn = document.getElementsByClassName(classname);
    return classListBtn;
}
function getInnerNum (id){
    const getIdBtn = document.getElementById(id);
    return getIdBtn;
}
const favoriteBtns = getCardBtn("favorite-btn");
for(const favoriteBtn of favoriteBtns){
    favoriteBtn.addEventListener("click", function(){
        const favoriteNum = getInnerNum("favorite-num");
        const currentNum = parseInt(favoriteNum.innerText);
        favoriteNum.innerText = currentNum + 1;
    })
}

const callBtns = getCardBtn("Call-btn")
for(const callBtn of callBtns){
    callBtn.addEventListener("click", function(){
        const coinNum = getInnerNum("coin-num");
        const cardTitle = callBtn.parentNode.parentNode.childNodes[1].innerText;
        const cardNum = callBtn.parentNode.parentNode.childNodes[5].innerText;
        const realTime = new Date()
        const currentNum = parseInt(coinNum.innerText);
        if(currentNum < 20){
            alert(`❌ Not enough coins. Call needs 20 coins.`)
            return
        }
        else{
            alert(`📞Calling ${cardTitle} ${cardNum}...`);
        }
        coinNum.innerText = currentNum - 20;
        const createDiv = document.createElement("div")
        const parentDiv = document.getElementById("parent-div")
        createDiv.innerHTML = `
        <div class="bg-[#FAFAFA] p-4 flex items-center justify-between rounded-lg mt-2">
            <div>
                <h1 class="font-semibold text-lg">${cardTitle}</h1>
                <p class="text-lg text-[#5C5C5C]">${cardNum}</p>
            </div>
            <span class="text-lg">${realTime.toLocaleTimeString()}</span>
        </div>
        `
        parentDiv.appendChild(createDiv)
    })
}

const clearBtn = getInnerNum("clear-btn");
clearBtn.addEventListener("click", function(){
    const parentDiv = document.getElementById("parent-div");
    parentDiv.innerText = "";
})

const copyBtns = getCardBtn("Copy-btn");
for(const copyBtn of copyBtns){
    copyBtn.addEventListener("click", function(){
        const copyNum = getInnerNum("Copy-num");
        const cardNum = copyBtn.parentNode.parentNode.childNodes[5].innerText;
        navigator.clipboard.writeText(cardNum);
        const currentNum = parseInt(copyNum.innerText);
        alert(`📋Number copied successfully ${cardNum}`);
        copyNum.innerText = currentNum + 1;
    })
}
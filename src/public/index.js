function numberClick(buttonNum){
    totNum(buttonNum);
}
function totNum(addNum){
    const screenNum = document.getElementById('number-area').innerText;
    if(screenNum === '0'){
        const updateNum = addNum.toString();
        document.getElementById('number-area').innerHTML = updateNum;
    } else if(screenNum.includes('.')){
        if(addNum.toString() === '.'){
            document.getElementById('number-area').innerHTML = screenNum;
        } else {
            const updateNum = screenNum + addNum.toString();
            document.getElementById('number-area').innerHTML = updateNum;
        }
    } else {
        const updateNum = screenNum + addNum;
        document.getElementById('number-area').innerHTML = updateNum;
    }
}
function clearClick(){
    document.getElementById('number-area').innerHTML = '0';
}

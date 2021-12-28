let newNum = true;
function numberClick(buttonNum){
    updateNumber(buttonNum);
}
function updateNumber(addNum){
    const screenNum = document.getElementById('number-area').innerText.toString();
    if(screenNum.indexOf('0') === 0 && !screenNum.includes('.') && newNum){
        if(addNum === '.'){
            console.log('addNum === ');
            document.getElementById('number-area').innerHTML = '0'+addNum;
            newNum = false;
        } else{
            console.log('addNum ===  - else');
            document.getElementById('number-area').innerHTML = addNum.toString();
            newNum = false;
        }
    } else if(newNum){
        if(addNum === '.'){
            console.log('addNum ===     new num');
            document.getElementById('number-area').innerHTML = '0'+addNum;
            newNum = false;
        } else{
            console.log('addNum ===     new num else');
            document.getElementById('number-area').innerHTML = addNum.toString();
            newNum = false;
        }
    }else{
        if(addNum === '.' && (screenNum.indexOf('+') === screenNum.length-1 || screenNum.indexOf('—') === screenNum.length-1 || screenNum.indexOf('/') === screenNum.length-1 || screenNum.indexOf('*') === screenNum.length-1)){
            console.log('big ass line');
            document.getElementById('number-area').innerHTML = screenNum + '0' + addNum;
            newNum = false;
        } else if(screenNum != '0' && addNum != '.'|| (!screenNum.includes('.') && addNum === '.') || (addNum === '0' && screenNum.includes('.'))){
            console.log('line below big ass line');
            document.getElementById('number-area').innerHTML = screenNum + addNum;
            newNum = false;
        }
    }
}
function addOperator(operater){
    const screenNum = document.getElementById('number-area').innerText.toString();
    document.getElementById('number-area').innerHTML = screenNum + operater;
    newNum = false;
}
function clearClick(){
    document.getElementById('number-area').innerHTML = '0';
    newNum = true;
}
/**
 * on click of this function, screen num is taken in, if the parsed screenNum (numbers at top of calculator) is equal to 0 than you can use an opperator. if it is 0 then you cannot use an opperator
 * @param {operator} operatorType this is an operater like / * + -. peram is used when button is clicked
 */
function operatorClick(operatorType){
    const screenNum = document.getElementById('number-area').innerText;
    if(parseFloat(screenNum) != 0){
        if (screenNum.includes('+') || screenNum.includes('—') || screenNum.includes('*') || screenNum.includes('/')){
            equals();
        }
        addOperator(operatorType);
    }
}
/**
 * decides what the equation is, then takes the first number and last number and exicutes the equation type
 */
function equals(){
    // newNum = false;
    newNum = true;
    const screenNum = document.getElementById('number-area').innerText;
    if(screenNum.includes('+')){
        const num1 = screenNum.substring(0,screenNum.indexOf('+'));
        const num2 = screenNum.substring(screenNum.indexOf('+')+1);
        console.log(num2 === '');
        if(num2 === ''){
            document.getElementById('number-area').innerHTML = (parseFloat(num1));
        } else {
            document.getElementById('number-area').innerHTML = (parseFloat(num1)+parseFloat(num2));
        }
    }
    if(screenNum.includes('—')){
        const num1 = screenNum.substring(0,screenNum.indexOf('—'));
        const num2 = screenNum.substring(screenNum.indexOf('—')+1);
        if(num2 === ''){
            document.getElementById('number-area').innerHTML = (parseFloat(num1));
        } else {
            document.getElementById('number-area').innerHTML = (parseFloat(num1)-parseFloat(num2));
        }
    }
    if(screenNum.includes('*')){
        console.log('equals called');
        const num1 = screenNum.substring(0,screenNum.indexOf('*'));
        const num2 = screenNum.substring(screenNum.indexOf('*')+1);
        if(num2 === ''){
            document.getElementById('number-area').innerHTML = (parseFloat(num1));
        } else {
            document.getElementById('number-area').innerHTML = (parseFloat(num1)*parseFloat(num2));
        }
    }
    if(screenNum.includes('/')){
        console.log('equals called');
        const num1 = screenNum.substring(0,screenNum.indexOf('/'));
        const num2 = screenNum.substring(screenNum.indexOf('/')+1);
        if(num2 === ''){
            document.getElementById('number-area').innerHTML = (parseFloat(num1));
        } else {
            document.getElementById('number-area').innerHTML = (parseFloat(num1)/parseFloat(num2));
        }
    }
}
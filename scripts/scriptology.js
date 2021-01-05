console.log('Coded by Akin Kelebek, Bao Xinyi and Ece Demirtas');

function innit () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('subcontainer');
    
    var clearButton = document.getElementById('Clear');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('Create');
    submitCustom.addEventListener("click", onClickCustom);
}

var sl1 = document.getElementById("numWidth");
var sl1Value = document.getElementById("numWidthOutput");
sl1.innerHTML = sl1Value.value;

sl1.oninput = function() {
  sl1Value.innerHTML = this.value;
}

var sl2 = document.getElementById("numHeight");
var sl2Value = document.getElementById("numHeightOutput");
sl2.innerHTML = sl2Value.value;

sl2.oninput = function() {
  sl2Value.innerHTML = this.value;
}

function onClick() {
    onClickClear();
    console.log('Letting there be light');
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="subcontainer" + i;
            subcontainer.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.setAttribute("id", "subdiv" +i);
                    element.setAttribute("class", "fizbuz");
                    element.innerText="FizzBuzz " + i;
                }
                
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.setAttribute("id", "subdiv" +i);
                    element.setAttribute("class", "fiz");
                    element.innerText="Fizz " + i;
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    element.setAttribute("id", "subdiv" +i);
                    element.setAttribute("class", "buz");
                    element.innerText="Buzz " + i;
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.setAttribute("id", "subdiv" +i);
                    element.setAttribute("class", "num");
                    element.innerText = i;
                }
        }
}

function onClickClear () {
    while (subcontainer.firstChild) {
        subcontainer.removeChild(subcontainer.firstChild);
    }
    console.log('Let there be no light');
}

function onClickCustom (){
    onClickClear();
    console.log('Divs cleared');
    console.log('Generate custom divs');
    var startValue = document.getElementById('StartV').value;
    var endValue = document.getElementById('EndV').value;   
    var fizzValue = document.getElementById('FizzV').value;
    var buzzValue = document.getElementById('BuzzV').value;
    var fizzColor = document.getElementById('FizzC').value;
    var buzzColor = document.getElementById('BuzzC').value;
    var fizzBuzzColor = document.getElementById('FBC').value;
    var noColor = document.getElementById('DefaultC').value;
    console.log('StartV is ' + startValue);
    console.log('EndV is ' + endValue);
    console.log('Fizz value is fixed at - ' + fizzValue);
    console.log('Buzz value value is fixed at - ' + buzzValue);
    console.log('Fizz color is - ' + fizzColor);
    console.log('Buzz color is - ' + buzzColor);
    console.log('Fizzbuzz color has been chosen as ' + fizzBuzzColor);
    console.log('Default color has been chosen as - ' + noColor);
        for (startValue; startValue<=endValue; startValue++){
            const element = document.createElement('div');
            element.id="subdiv" + startValue;
            subcontainer.appendChild(element);
                if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
                    element.setAttribute("id", "subdiv" +startValue);
                    element.setAttribute("class", "fizzbuzz");
                    element.innerText="FizzBuzz " + startValue;
                    element.style.backgroundColor=fizzBuzzColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }
                else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0) {
                    element.setAttribute("id", "subdiv" +startValue);
                    element.setAttribute("class", "fizz");
                    element.innerText="Fizz " + startValue;
                    element.style.backgroundColor=fizzColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }

                else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
                    element.setAttribute("id", "subdiv" +startValue);
                    element.setAttribute("class", "buzz");
                    element.innerText="Buzz " + startValue;
                    element.style.backgroundColor=buzzColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }

                else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0){
                    element.setAttribute("id", "subdiv" +startValue);
                    element.setAttribute("class", "numm");
                    element.innerText=startValue;
                    element.style.backgroundColor=noColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }
        }
}

 function addListeners() {
    const submit = document.getElementById('Generate');
    submit.onclick = onClick;
}

innit();

// we have to select form first 
// the event of calculate button gonna be submit
const form = document.querySelector('form');

//this use case will give you empty value
 //const height = parseInt(document.querySelector('#height').value)

//by default the form is submitted via get or post, we have to prevent this

form.addEventListener('submit', function(e){
    e.preventDefault(); //stop your defualt action
    // from html .value we will extract value of height and weight, it is in string convert it to int
    //jab submit event hoga tab ham values lenge
    let heightVal = document.querySelector('#height').value
    let weightVal = document.querySelector('#weight').value

    const result = document.querySelector('#result');

    if(heightVal === '' || heightVal <= 0 || isNaN(heightVal)){
        result.innerHTML = `Please give a valid height ${heightVal}`;
    } else if(weightVal === '' || weightVal < 0 || isNaN(weightVal)){
    result.innerHTML = `Please give a valid weight ${weightVal}`;
   } else {
    //weight in kg divided by height in m squared
    const height = parseFloat(heightVal);
    const weight = parseFloat(weightVal)
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);  
    // result.innerHTML = `<span>${bmi}</span>, You are Overweight`

    if(bmi < 18.6){
        result.innerHTML = `<span>${bmi}</span>, You are Underweight.`
    } else if(bmi > 24.9){
        result.innerHTML = `<span>${bmi}</span>, You are Overweight.`
    } else {
        result.innerHTML = `<span>${bmi}</span>, You weight status is normal.`
    }
 }


})
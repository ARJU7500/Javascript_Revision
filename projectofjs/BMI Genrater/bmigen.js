const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
    if(height===''||height<0||isNaN(height))
    {
        results.innerHTML = `<p>please give a valid height:${height}</p>`;
    }
    else if(weight===''||weight<0||isNaN(weight))
    {
        results.innerHTML = `<p>please give a valid weight:${weight}</p>`;
    }
    else 
    {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.60)
        results.innerHTML = `<span>${bmi} is under weight </span>`
    else if(bmi>18.60)
        results.innerHTML = `<span>${bmi} is normal </span>`
    else(bmi>24.90)
        results.innerHTML = `<span>${bmi} is over weight </span>`
    }

})
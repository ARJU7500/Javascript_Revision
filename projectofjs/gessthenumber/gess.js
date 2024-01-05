let randomNum = parseInt(Math.random()*100+1)
const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('#intxt')
const PreGess = document.querySelector('.pgess')
const result = document.querySelector('.lstreslt')
const lowHighValue = document.querySelector('.lowHigh')
const resultPara = document.querySelector('.resultpara')
const paraGraph = document.createElement('p')

let prevGuess = []
let numOfGess = 1
let playGame = true

if(playGame)
    {
        sumbit.addEventListener('click', function(e){
            e.preventDefault()
            const guess = parseInt(userInput.value)
            console.log(guess);
            validateGuess(guess)
        })
    }

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('please enter valid number')
    }
    else if(guess<1)
    {
        alert('please enter grater than 0 value')
    }
    else if(guess>100)
    {
        alert('please enter less than 100 value')
    }
    else
    {
        prevGuess.push(guess)
        if(numOfGess===11)
        {
            displayGuess(guess)
            displayMgs(`game over. Random number waas ${randomNum}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGess(guess)
        }
    }
}

function checkGess(guess)
{
    if(guess==randomNum)
    {
        displayMgs(`right guess`)
        endGame()
    }
    else if(guess<randomNum)
    {
        displayMgs(`number is to low`)
    }
    else if(guess>randomNum)
    {
        displayMgs(`number is to high`)
    }
}

function displayGuess()
{
    userInput.value = ''
    PreGess.innerHTML += `${guess}, `
    numOfGess++
    result.innerHTML = `${11-numOfGess}`
}

function displayMgs(mgs)
{
    lowHighValue.innerHTML = `<p>${mgs}</p>`
}
function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start new game</h2>`
    resultPara.appendChild(p)
    playGame = false
    newGame()
}
function newGame()
{
    const newgamebtn = document.querySelector('#newGame')
    newgamebtn.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100+1)
        prevGuess = []
        numOfGess = 1
        PreGess.innerHTML += ``
    result.innerHTML = `${11-numOfGess}`
    userInput.removeAttribute('disabled')
    resultPara.removeChild(p)
        playGame= true 
    })
}



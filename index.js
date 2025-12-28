const minnum = 0
const maxnum = 10
let running = true

let guess
let attempt = 0
let answer = Math.floor(Math.random() * (maxnum-minnum+1))
 console.log(answer)


 while (running){
    
    guess = window.prompt(`guess a valid number from ${minnum}-${maxnum}`)
    guess = Number(guess)
    if (isNaN(guess)){
        window.alert("please enter a valid number")
    }
    else if (guess<minnum || guess >maxnum){
        window.alert("please enter a valid number")
    }
    else{
        attempt ++
        if (guess< answer){
            window.alert("TOO LOW. Try again")
        }
        else if (guess> answer){
            window.alert("TOO HIGH. Try again")
        }
        else{
            document.getElementById("one").innerText = `congratulation ${guess} is the correct nummber it took you ${attempt}guess`
            running = false
        }
    }
 }
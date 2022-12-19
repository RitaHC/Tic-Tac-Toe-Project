console.log('Hello Hameer')

let turn = 'X'
let gameover = false
const winningImage = document.querySelector('img')
let boxes = document.querySelectorAll('.box')

//Change Turn 
const changeTurn = () => {
    return turn==='X'? '0': 'X'
} 

//Function to checkwin
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]
    wins.forEach (e=>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won'
            gameover = true
            winningImage.style.width = '200px'
            boxtext.preventDefault()
            
        }
        return null
})
}

// Game Logic

// Click Listener
Array.from(boxes).forEach (element => {
    let boxtext = element.querySelector('.boxtext')

    //Putting Event Listener on each box
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn
            turn = changeTurn()
            checkWin()
            if (!gameover){
                document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`
            }
        
        }
    })

})

// onclick listener to reset button

reset.addEventListener('click', () => {
    location.reload()
} )
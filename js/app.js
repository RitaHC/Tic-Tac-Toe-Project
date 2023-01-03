console.log('Hello Hameer')

let turn = 'X'
let gameover = false
const winningImage = document.querySelector('img')
let boxes = document.querySelectorAll('.box')
const container = document.querySelector('#container')
let turnCount = 0

//Change Turn 
const changeTurn = () => {
    turnCount ++
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

    // if (boxtext){
    //     console.log(`It's a Tie`)
    // }
    

    wins.forEach (e=>{

        
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won'
            gameover = true
            winningImage.style.width = '200px'
            Array.from(boxes).forEach (element => {
                element.style.pointerEvents = 'none'
                console.log('disabling clicks')
        } 
        )
        console.log('removing clicks')
         } 
         if (turnCount>=9){
            console.log(`It's a Draw`)
            document.querySelector('.info').innerText = " Its a Tie"
            gameover = true
            turnCount = 0

         }

        //  else if ((boxtext[e[0]].innerText !=='') && (boxtext[e[1]].innerText !=='') && (boxtext[e[2]].innerText !=='')) {
        //      
        //  }


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
            console.log(turnCount)

            
            
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

const rajat = () => {
    const print = document.createElement('h1')
            print.innerText = 'Print Line'
            const reset = document.getElementsByClassName('info')
            info.appendChild(print)
            console.log(print)
}

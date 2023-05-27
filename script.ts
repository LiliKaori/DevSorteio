    const input = document.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>
    const inputMin = document.getElementById("numMin") as HTMLInputElement
    const inputMax= document.getElementById("numMax") as HTMLInputElement
    const button = document.getElementsByTagName("button") as HTMLCollectionOf<HTMLButtonElement>

function checkNumbers(){
    const min : number = parseInt(inputMin.value)
    const max : number = parseInt(inputMax.value)

    if(!min || !max){
        button[0].disabled = true
    } else {
        button[0].disabled = false
    }
    console.log(button[0])
}
checkNumbers()

for(let i=0; i<input.length; i++){input[i].addEventListener("keyup", checkNumbers, false)}


function raffle(): void{
    const min : number = parseInt(inputMin.value)
    const max : number = parseInt(inputMax.value)
    
    const result : number = Math.floor(Math.random() * (max - min) + min)
    console.log(result)
}
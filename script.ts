    const inputMin = document.getElementById("numMin") as HTMLInputElement
    const inputMax= document.getElementById("numMax") as HTMLInputElement

function raffle(){
    const min : number = parseInt(inputMin.value)
    const max : number = parseInt(inputMax.value)
    
    const result : number = Math.floor(Math.random() * (max - min) + min)
    console.log(result)
}
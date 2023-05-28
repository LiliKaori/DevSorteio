    const input = document.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>
    const arrayInput : HTMLInputElement[] = Array.from(input)  
    const button = document.getElementsByTagName("button")[0] as HTMLButtonElement
    const divResult = document.getElementsByClassName("result") as HTMLCollectionOf<HTMLDivElement>

function filterInput(i:number) : void {
    const filteredValue : string = input[i].value.replaceAll(/[\D]/gim,"").replaceAll(/^[0]+/gim, "")   
    input[i].value = filteredValue
    
    checkNumbers()
}

function checkNumbers(): void{
    const empty = arrayInput.find(input=>input.value==="")
    button.disabled = empty ? true : false
    const values = arrayInput.map((input)=>parseInt(input.value))
    const quantity = values[0]
    const numbers = values.slice(1)
    
    const min : number = Math.min(...numbers)
    const max : number = Math.max(...numbers)

    if(quantity && quantity>max-min+1){
        const alert = document.getElementById("alert") as HTMLParagraphElement
        alert.innerHTML=`Só pode sortear até ${max-min+1} ${max-min+1==1?"número":"números"}`
        button.disabled = true
    }else{
        const alert = document.getElementById("alert") as HTMLParagraphElement
        alert.innerHTML=""
        button.disabled = false
    }
}

function raffle(): void{    
    const values = arrayInput.map((input)=>parseInt(input.value))
    const quantity = values[0]
    const numbers = values.slice(1)
    
    const min : number = Math.min(...numbers)
    const max : number = Math.max(...numbers)

    let result : string[] = []

    while(result.length<quantity){
       const sort = Math.floor((Math.random() * (max - min + 1)) + min)
       
       if(result.indexOf(` ${sort.toString()}`)===-1)
       {result.push(` ${sort.toString()}`)}
    }

    // const result : number = Math.floor(Math.random() * (min - max) + max)

    input[1].value = min.toString()
    input[2].value = max.toString()

    divResult[0].innerHTML += `
        <div>
            <h2>${result}</h2>
            <p class="textResult">${quantity} ${quantity===1?"número sorteado":"números sorteados"} de ${min} até ${max}.</p>
        </div>
    `
}

for(let i=0; i<input.length; i++){input[i].addEventListener("keyup", ()=>{filterInput(i)}, false)}
button.addEventListener("click", raffle, false)
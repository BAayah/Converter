let transSumEl = document.getElementById('currency')
let amountEl = document.getElementById('amount')
let sumEl = document.getElementById('sum')
let resultEl = document.getElementById('result')

let correc = new Audio("./correc.mp3")

const sumCurrent = () => {
    let transSum = parseFloat(transSumEl.value)
    let amount = parseFloat(amountEl.value)

    let res = transSum * amount

    resultEl.innerHTML = 'sum:' +' '+ res
    correc.play()
}
sumEl.addEventListener('click',sumCurrent)
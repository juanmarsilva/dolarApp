export const addDot = (finalNumber:number) => {
    const [convertToArray, decimales] = finalNumber.toString().split('.')
    const newArray = []
    for(let i = 0; i < convertToArray.length; i++){
        newArray.push(convertToArray[i])
        if((convertToArray.length - (i+1)) % 3 === 0 && i < convertToArray.length-1) newArray.push('.')
    }
    return decimales? `${newArray.join('')},${decimales}` : newArray.join('')
}

export const addTwoDecimals = (recived:number) => {
    const m = Number((Math.abs(recived) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(recived);
}

export const dolarConvert = (num:string, number:number) => {
    const recived = num? number/Number(num.replace(',','.')) : 0
    const finalNumber = addTwoDecimals(recived)
    return addDot(finalNumber)
}

export const plazoFijo = (num:number,divisor:number) => {
    const prev = num + num*(0.75/(12/divisor))
    const finalNumber = addTwoDecimals(prev)
    return addDot(finalNumber)
}

export const plazoUVA = (num:number,month:number,inflacion:number) => {
    let prev
    if(month === 1) {
        prev = num + num*(0.71/12)
    }
    else {
        prev = num + num*(inflacion/100)
    }
    const finalNumber = addTwoDecimals(prev);
    return addDot(finalNumber)
}
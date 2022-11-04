export const addDot = (finalNumber:number) => {
    const [convertToArray, decimales] = finalNumber.toString().split('.')
    const newArray = []
    for(let i = 0; i < convertToArray.length; i++){
        newArray.push(convertToArray[i])
        if((convertToArray.length - (i+1)) % 3 === 0 && i < convertToArray.length-1) newArray.push('.')
    }
    return decimales? `${newArray.join('')},${decimales}` : newArray.join('')
}

export const dolarConvert = (num:any, number:number) => {
    const recived = number/Number(num.replace(',','.'))
    const m = Number((Math.abs(recived) * 100).toPrecision(15));
    const finalNumber = Math.round(m) / 100 * Math.sign(recived);
    return addDot(finalNumber)
}

export const plazoFijo = (num:number,divisor:number) => {
    const prev = num + num*(0.75/(12/divisor))
    const m = Number((Math.abs(prev) * 100).toPrecision(15));
    const finalNumber = Math.round(m) / 100 * Math.sign(prev);
    return addDot(finalNumber)
}

export const plazoUVA = (num:number,month:number) => {
    let prev
    if(month === 1) {
        prev = num + num*(0.71/12)
    }
    else {
        prev = num
    }
    const m = Number((Math.abs(prev) * 100).toPrecision(15));
    const finalNumber = Math.round(m) / 100 * Math.sign(prev);
    return addDot(finalNumber)
}
const date = new Date()
const today = date.getDate()
const thisMonth = date.getMonth()

export const functionDays = (dailyEvolution:any) => {
    const arrayDays:any = []
    Object.keys(dailyEvolution).map(key => {
        let obj = {}
        obj[key.slice(1)] = Number(dailyEvolution[key]._text.replace(',','.'))
        arrayDays.push(obj)
    })
    const first = arrayDays.slice(0,today-1)
    const second = arrayDays.slice(today-1,arrayDays.length)
    const united = first.length? [...second,...first] : second
    return united.filter((number:any, i:number) => i % 2 === 0 && number)
}

export const functionMonths = (monthlyEvolution:any) => {
    let i = 1
    let arrayMonth = []
    for(let key in monthlyEvolution) {
        let obj = {}
        obj[i] = Number(monthlyEvolution[key]._text.replace(',','.'))
        arrayMonth.push(obj)
        i++
    }
    const first = arrayMonth.slice(0,thisMonth)
    const second = arrayMonth.slice(thisMonth,arrayMonth.length)
    const united = first.length? [...second,...first] : second
    return united
}
const date = new Date()
const today = date.getDate()
const thisMonth = date.getMonth()

export const functionDays = (dailyEvolution:Array<any>) => {
    const first = dailyEvolution.slice(0,today-1)
    const second = dailyEvolution.slice(today-1,dailyEvolution.length)
    const united = first.length? [...second,...first] : second
    return united.filter((number:any, i:number) => i % 2 === 0 && number)
}

export const functionMonths = (monthlyEvolution:Array<any>) => {
    const first = monthlyEvolution.slice(0,thisMonth)
    const second = monthlyEvolution.slice(thisMonth,monthlyEvolution.length)
    const united = first.length? [...second,...first] : second
    return united
}
import { TYPES_OF_DOLARS, INFO_DOLAR_PRICE, EURO_PRICE, REAL_PRICE, GET_ALL_DATA, SET_THEME, GET_ALL_CURRENCIES, GET_ALL_EXCHANGES, GET_ALL_EVOLUTIONS } from './actions';
import { functionDays, functionMonths } from './reducerFunctions';

const initialState = {
    dolar: {
        oficial: {
            buyPrice: 0,
            sellPrice: 0,
        },
        blue: {
            buyPrice: 0,
            sellPrice: 0,
        },
        CCL: {
            buyPrice: 0,
            sellPrice: 0,
        },
        bolsa: {
            buyPrice: 0,
            sellPrice: 0,
        },
        turista: {
            buyPrice: 0,
            sellPrice: 0,
        },
        qatar: {
            buyPrice: 0,
            sellPrice: 0,
        },
    },
    infoDolar: {},
    euro: {
        buyPrice: 0,
        sellPrice: 0,
    },
    real: {
        buyPrice: 0,
        sellPrice: 0,
    },
    evolution: {
        name: '',
        days: [],
        months: [],
        // blue:[],
        // oficial: [],
        // inflacion: [],
    },
    conversor: {
        dolarReal: 0,
        dolarEuro: 0,
        dolarPesoChileno: 0,
        dolarPesoUruguayo: 0,
    },
    theme: '',
}

export default function reducerRoot (state = initialState, {type, payload}: any): any {
    switch (type){
        case GET_ALL_CURRENCIES:
            let oficial = payload[0]
            let blue = payload[1]
            let CCL = payload[2]
            let bolsa = payload[3]
            let turista = payload[4]
            let qatar = payload[5]
            let euro = payload[6]
            let real = payload[7]
            return {
                ...state,
                dolar: {
                    oficial,
                    blue,
                    CCL,
                    bolsa,
                    turista,
                    qatar
                },
                euro,
                real
            }
        case GET_ALL_EXCHANGES: 
            let dolarReal = payload[1].value;
            let dolarEuro = payload[0].value;
            let dolarPesoChileno = payload[2].value;
            let dolarPesoUruguayo = payload[3].value;
            return {
                ...state,
                conversor: {
                    ...state.conversor,
                    dolarEuro,
                    dolarReal,
                    dolarPesoChileno, 
                    dolarPesoUruguayo
                }
            }
        case GET_ALL_EVOLUTIONS:
            const { name, days, months } = payload;
            return {
                ...state,
                evolution: {
                    ...state.evolution,
                    name,
                    days,
                    months,
                }
            }
        case TYPES_OF_DOLARS : 
            // let oficial = payload[0].casa
            // let dolarBlue = payload[1].casa
            // let ccl = payload[3].casa
            // let bolsa = payload[4].casa
            // let turista = payload[6].casa
            // let qatar = oficial.sellPrice && Number(oficial.sellPrice.replace(',','.')) + Number(oficial.sellPrice.replace(',','.'))*1
            // qatar = qatar.toString().replace('.',',')
            return {
                ...state,
                // dolar: {
                //     ...state.dolar,
                //     oficial: {
                //         buyPrice: oficial.buyPrice,
                //         sellPrice: oficial.sellPrice
                //     },
                //     blue: {
                //         buyPrice: dolarBlue.buyPrice,
                //         sellPrice: dolarBlue.sellPrice
                //     },
                //     ccl: {
                //         buyPrice: ccl.buyPrice,
                //         sellPrice: ccl.sellPrice
                //     },
                //     bolsa: {
                //         buyPrice: bolsa.buyPrice,
                //         sellPrice: bolsa.sellPrice
                //     },
                //     turista: {
                //         buyPrice: 'No Cotiza',
                //         sellPrice: turista.sellPrice,
                //     },
                //     qatar: {
                //         buyPrice: 'No Cotiza',
                //         sellPrice: qatar
                //     }
                // }
            }
        case INFO_DOLAR_PRICE:  
            return {
                ...state,
                infoDolar: payload,
            }
        case EURO_PRICE: 
            const bancoNacionInfoEURO = payload.filter((obj: any) => obj.casa.nombre === 'Banco Nación');
            const buyPricePriceEuro = bancoNacionInfoEURO[0].casa.buyPrice;
            const sellPricePriceEuro = bancoNacionInfoEURO[0].casa.sellPrice;
            return {
                ...state,
                euro: {
                    buyPrice: buyPricePriceEuro,
                    sellPrice: sellPricePriceEuro,
                }
            }
        case REAL_PRICE:
            const bancoNacionInfoReal = payload.filter((obj: any) => obj.casa.nombre === 'Banco Nación');
            const buyPricePriceReal = bancoNacionInfoReal[0].casa.buyPrice;
            const sellPricePriceReal = bancoNacionInfoReal[0].casa.sellPrice; 
            return {
                ...state,
                real: {
                    buyPrice: buyPricePriceReal,
                    sellPrice: sellPricePriceReal,
                }
            };
        case GET_ALL_DATA:
            // const oficialDailyEvolution = payload.valores.evolucion_dolar.oficial.mes
            // const oDailyEvolution = functionDays(oficialDailyEvolution)
            // const oficialMonthlyEvolution = payload.valores.evolucion_dolar.oficial.anio
            // const oMonthlyEvolution = functionMonths(oficialMonthlyEvolution)
            // const blueDailyEvolution = payload.valores.evolucion_dolar.blue.mes
            // const bDailyEvolution = functionDays(blueDailyEvolution)
            // const blueMonthlyEvolution = payload.valores.evolucion_dolar.blue.anio
            // const bMonthlyEvolution = functionMonths(blueMonthlyEvolution)
            // const dolarEuro = payload.valores.Monedas.casa193.sellPrice._text;
            // const dolarReal = payload.valores.Monedas.casa270.sellPrice._text;
            // const dolarPesoChileno = payload.valores.Monedas.casa81.sellPrice._text;
            // const dolarPesoUruguayo = payload.valores.Monedas.casa55.sellPrice._text;
            // const pesoChilenoPrice = payload.valores.cotizador.casa308.sellPrice._text;
            // const pesoUruguayoPrice = payload.valores.cotizador.casa307.sellPrice._text;
            // return {
            //     ...state,
            //     conversor: {
            //         dolarEuro,
            //         dolarReal,
            //         dolarPesoChileno,
            //         dolarPesoUruguayo,
            //         pesoChilenoPrice,
            //         pesoUruguayoPrice
            //     },
            //     evolution: {
            //         ...state.evolution,
            //         oficial: [oDailyEvolution,oMonthlyEvolution],
            //         blue: [bDailyEvolution,bMonthlyEvolution]
            //     }
            // }
        case SET_THEME:
            return {
                ...state,
                theme: payload,
            }
        // case INFLACION:
        //     let uva = payload._z ? payload._z[payload._z.length-3].v + payload._z[payload._z.length-2].v + payload._z[payload._z.length-1].v + 0.25 : 0
        //     return{
        //         ...state,
        //         dolar: {
        //             ...state.dolar,
        //             uva: uva
        //         }
        //     }
        default: 
            return state
    }
}
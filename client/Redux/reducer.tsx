import { SET_THEME, GET_ALL_CURRENCIES, GET_ALL_EXCHANGES, GET_ALL_EVOLUTIONS } from './actions';
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
            let oficial = null
            let blue = null
            let CCL = null
            let bolsa = null
            let turista = null
            let qatar = null
            let euro = null
            let real = null
            payload.forEach((money:any) => {
                switch (money.name){
                    case 'Dolar Oficial':
                        return oficial = money
                    case 'Dolar Blue':
                        return blue = money
                    case 'Euro oficial':
                        return euro = money
                    case 'Real oficial':
                        return real = money
                    case 'Dolar CCL':
                        return CCL = money
                    case 'Dolar Bolsa':
                        return bolsa = money
                    case 'Dolar turista':
                        return turista = money
                    case 'Dolar Qatar':
                        return qatar = money
                    default:
                        return money
                }
            })
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
                    days: days && functionDays(days),
                    months: name !== 'inflacion'? functionMonths(months): months,
                }
            }
        case SET_THEME:
            return {
                ...state,
                theme: payload,
            }
        default: 
            return state
    }
}
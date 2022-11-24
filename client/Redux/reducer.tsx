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
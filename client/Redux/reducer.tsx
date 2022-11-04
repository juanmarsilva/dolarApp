import { DETAIL_DOLAR, TYPES_OF_DOLARS, detailDolar, INFO_DOLAR_PRICE } from './actions';

const initialState = {
    dolar: {
        oficial: {
            compra: 0,
            venta: 0,
        },
        blue: {
            compra: 0,
            venta: 0,
        },
        ccl: {
            compra: 0,
            venta: 0,
        },
        bolsa: {
            compra: 0,
            venta: 0,
        },
        turista: {
            compra: 0,
            venta: 0,
        }
    },
    detailDolar: '',
    infoDolar: {},
}

export default function reducerRoot (state = initialState, {type, payload}: any): any {
    switch (type){
        case TYPES_OF_DOLARS : 
            let oficial = payload[0].casa
            let dolarBlue = payload[1].casa
            let ccl = payload[3].casa
            let bolsa = payload[4].casa
            let turista = payload[6].casa
            return {
                ...state,
                dolar: {
                    oficial: {
                        compra: oficial.compra,
                        venta: oficial.venta
                    },
                    blue: {
                        compra: dolarBlue.compra,
                        venta: dolarBlue.venta
                    },
                    ccl: {
                        compra: ccl.compra,
                        venta: ccl.venta
                    },
                    bolsa: {
                        compra: bolsa.compra,
                        venta: bolsa.venta
                    },
                    turista: {
                        compra: turista.compra,
                        venta: turista.venta
                    }
                }
            }
        case DETAIL_DOLAR: 
            return {
                ...state,
                detailDolar: payload
            }
        case INFO_DOLAR_PRICE:  
            return {
                ...state,
                infoDolar: payload,
            }
        default: 
            return state
    }
}
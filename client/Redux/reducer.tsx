import { TYPES_OF_DOLARS } from "./actions";

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
}

export default function reducerRoot (state = initialState, action: any): any {
    switch (action.type){
        case TYPES_OF_DOLARS : 
            let oficial = action.payload[0].casa
            let dolarBlue = action.payload[1].casa
            let ccl = action.payload[3].casa
            let bolsa = action.payload[4].casa
            let turista = action.payload[6].casa
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
        default: 
            return state
    }
}
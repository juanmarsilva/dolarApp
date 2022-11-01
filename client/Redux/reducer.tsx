import { TYPES_OF_DOLARS } from "./actions";

interface action {
    type: string;
    payload: any;
}

const initialState = {
    dolar: {
        oficial: {},
        blue: {},
        ccl: {},
        soja: {},
        bolsa: {},
        turista: {}
    },
}

export default function reducerRoot (state = initialState, action: action) {
    switch (action.type){
        case TYPES_OF_DOLARS : 
            let oficial = action.payload[0].casa
            let blue = action.payload[1].casa
            let soja = action.payload[2].casa
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
                        compra: blue.compra,
                        venta: blue.venta
                    },
                    ccl: {
                        compra: ccl.compra,
                        venta: ccl.venta
                    },
                    soja: {
                        compra: soja.compra,
                        venta: soja.venta
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
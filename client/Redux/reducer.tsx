import { DETAIL_DOLAR, TYPES_OF_DOLARS, INFO_DOLAR_PRICE, EURO_PRICE, REAL_PRICE } from './actions';

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
        },
        qatar: {
            compra: 0,
            venta: 0,
        },
        // uva: 0
    },
    detailDolar: '',
    infoDolar: {},
    euro: {
        compra: 0,
        venta: 0,
    },
    real: {
        compra: 0,
        venta: 0,
    },
}

export default function reducerRoot (state = initialState, {type, payload}: any): any {
    switch (type){
        case TYPES_OF_DOLARS : 
            let oficial = payload[0].casa
            let dolarBlue = payload[1].casa
            let ccl = payload[3].casa
            let bolsa = payload[4].casa
            let turista = payload[6].casa
            let qatar = oficial.venta && Number(oficial.venta.replace(',','.')) + Number(oficial.venta.replace(',','.'))*1
            qatar = qatar.toString().replace('.',',')
            return {
                ...state,
                dolar: {
                    ...state.dolar,
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
                        compra: 'No Cotiza',
                        venta: turista.venta,
                    },
                    qatar: {
                        compra: 'No Cotiza',
                        venta: qatar
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
        case EURO_PRICE: 
            const bancoNacionInfoEURO = payload.filter((obj: any) => obj.casa.nombre === 'Banco Nación');
            const compraPriceEuro = bancoNacionInfoEURO[0].casa.compra;
            const ventaPriceEuro = bancoNacionInfoEURO[0].casa.venta;
            return {
                ...state,
                euro: {
                    compra: compraPriceEuro,
                    venta: ventaPriceEuro,
                }
            }
        case REAL_PRICE:
            const bancoNacionInfoReal = payload.filter((obj: any) => obj.casa.nombre === 'Banco Nación');
            const compraPriceReal = bancoNacionInfoReal[0].casa.compra;
            const ventaPriceReal = bancoNacionInfoReal[0].casa.venta; 
            return {
                ...state,
                real: {
                    compra: compraPriceReal,
                    venta: ventaPriceReal,
                }
            };
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
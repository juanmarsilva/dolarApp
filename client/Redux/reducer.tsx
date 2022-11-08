import { DETAIL_DOLAR, TYPES_OF_DOLARS, INFO_DOLAR_PRICE, EURO_PRICE, REAL_PRICE, GET_ALL_DATA } from './actions';
import { functionDays, functionMonths } from './reducerFunctions';

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
    evolution: {
        blue:[],
        oficial: []
    },
    conversor: {
        dolarReal: 0,
        dolarEuro: 0,
        dolarPesoChileno: 0,
        dolarPesoUruguayo: 0,
        pesoChilenoPrice: 0,
        pesoUruguayoPrice: 0,
    }
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
        case GET_ALL_DATA:
            const oficialDailyEvolution = payload.valores.evolucion_dolar.oficial.mes
            const oDailyEvolution = functionDays(oficialDailyEvolution)
            const oficialMonthlyEvolution = payload.valores.evolucion_dolar.oficial.anio
            const oMonthlyEvolution = functionMonths(oficialMonthlyEvolution)
            const blueDailyEvolution = payload.valores.evolucion_dolar.blue.mes
            const bDailyEvolution = functionDays(blueDailyEvolution)
            const blueMonthlyEvolution = payload.valores.evolucion_dolar.blue.anio
            const bMonthlyEvolution = functionMonths(blueMonthlyEvolution)
            const dolarEuro = payload.valores.Monedas.casa193.venta._text;
            const dolarReal = payload.valores.Monedas.casa270.venta._text;
            const dolarPesoChileno = payload.valores.Monedas.casa81.venta._text;
            const dolarPesoUruguayo = payload.valores.Monedas.casa55.venta._text;
            const pesoChilenoPrice = payload.valores.cotizador.casa308.venta._text;
            const pesoUruguayoPrice = payload.valores.cotizador.casa307.venta._text;
            return {
                ...state,
                conversor: {
                    dolarEuro,
                    dolarReal,
                    dolarPesoChileno,
                    dolarPesoUruguayo,
                    pesoChilenoPrice,
                    pesoUruguayoPrice
                },
                evolution: {
                    ...state.evolution,
                    oficial: [oDailyEvolution,oMonthlyEvolution],
                    blue: [bDailyEvolution,bMonthlyEvolution]
                }
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
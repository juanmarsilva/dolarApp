import axios from 'axios';

export const TYPES_OF_DOLARS = 'TYPES_OF_DOLARS';
export const DETAIL_DOLAR = 'DETAIL_DOLAR';
export const INFO_DOLAR_PRICE = 'INFO_DOLAR_PRICE';
export const EURO_PRICE = 'EURO_PRICE';
export const REAL_PRICE = 'REAL_PRICE';
export const GET_ALL_DATA = 'GET_ALL_DATA';
// export const INFLACION = 'INFLACION'
// const { TOKEN } = process.env

export const onTypesOfDolars = () => {
    return function(dispatch: any) {
        axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => {
                return dispatch({type: TYPES_OF_DOLARS, payload: res.data})
            })
            .catch(err => console.log(err))
    };
};

export const detailDolar = (name: string) => {
    return {
        type: DETAIL_DOLAR,
        payload: name,
    };
};

export const infoAboutDolarPrice = (type: string) => {
    return function(dispatch: any) {
        axios(`https://api-dolar-argentina.herokuapp.com/api/evolucion/dolar${type}`)
            .then(res => {
                return dispatch({type: INFO_DOLAR_PRICE, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};

// export const onKnowInflacion = () => {
//     return (dispatch:any) => {
//         axios('https://api.estadisticasbcra.com/inflacion_mensual_oficial',{
//             headers:{
//                 'Authorization':`Bearer ${TOKEN}`
//             }
//         })
//         .then(res => dispatch({type: INFLACION, payload:res.data}))
//         .catch(err => console.log(err))
//     }
// }

export const euroPrice = () => {
    return function(dispatch: any) {
        axios('https://www.dolarsi.com/api/api.php?type=euro')
            .then(res => {
                return dispatch({type: EURO_PRICE, payload: res.data})
            })
            .catch(err => console.log(err))
    };
}

export const realPrice = () => {
    return function(dispatch: any) {
        axios('https://www.dolarsi.com/api/api.php?type=real')
            .then(res => {
                return dispatch({type: REAL_PRICE, payload: res.data})
            })
            .catch(err => console.log(err))
    };
}

export const getAllData = () => {
    return function (dispatch:any){

        axios.get("https://api-dolar-argentina.herokuapp.com/api/all")
        .then(res => {
            // const json = convert.xml2json(res.data, {compact: true, spaces: 4});
            // const jsonParsed = JSON.parse(json);
            return dispatch({type:GET_ALL_DATA ,payload:res.data })
        })
        .catch(err => console.log(err))
    }
}
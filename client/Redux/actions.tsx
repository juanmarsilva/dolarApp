import axios from 'axios';
export const TYPES_OF_DOLARS = 'TYPES_OF_DOLARS';
export const INFO_DOLAR_PRICE = 'INFO_DOLAR_PRICE';
export const EURO_PRICE = 'EURO_PRICE';
export const REAL_PRICE = 'REAL_PRICE';
export const GET_ALL_DATA = 'GET_ALL_DATA';
export const SET_THEME = 'GET_THEME';
export const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES';
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
        axios("https://api-dolar-argentina.herokuapp.com/api/all")
        .then(res => {
            return dispatch({type:GET_ALL_DATA ,payload:res.data })
        })
        .catch(err => console.log(err))
    }
}

export const setTheme = (theme: string = 'dark') => {
    return {
        type: SET_THEME,
        payload: theme,
    }
}

export const getAllCurrencies = () => {
    // return function (dispatch:any) {
    //     axios('http://localhost:3001/dolar')
    //     .then(res => {
    //         console.log(res.data)
    //         return dispatch({type: GET_ALL_CURRENCIES, payload: res.data})
    //     })
    //     .catch(err => console.log(err))
    // }
    return async function (dispatch:any) {
        try {
            console.log('antes de la solicitud')
            let data = await axios.get('http://10.0.2.2:3001/dolar')
            console.log('despues')
            return dispatch ({
                type: GET_ALL_CURRENCIES,
                payload: data.data
            })
        }
        catch (err) {
            console.log('aca hay un error')
        }
    }
}
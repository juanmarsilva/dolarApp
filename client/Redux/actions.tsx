import axios from 'axios';
export const SET_THEME = 'GET_THEME';
export const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES';
export const GET_ALL_EXCHANGES = 'GET_ALL_EXCHANGES';
export const GET_ALL_EVOLUTIONS = 'GET_ALL_EVOLUTIONS';

const { API_ROUTE } = process.env

export const setTheme = (theme: string = 'dark') => {
    return {
        type: SET_THEME,
        payload: theme,
    }
}

export const getAllCurrencies = () => {
    return async function (dispatch:any) {
        try {
            const { data } = await axios(`${API_ROUTE}/dolar`)
            console.log(API_ROUTE)
            return dispatch ({
                type: GET_ALL_CURRENCIES,
                payload: data
            })
        }
        catch (err) {
            console.log('aca hay un error', err)
        };
    };
};

export const getAllExchanges = () => {
    return async function(dispatch: any) {
        try {
            const { data } = await axios(`${API_ROUTE}/exchanges`)
            return dispatch({
                type: GET_ALL_EXCHANGES,
                payload: data
            })
        } catch(err) {
            console.log(err);
        };
    };
};

export const getAllEvolutions = ( type: string ) => {
    return async function(dispatch: any) {
        try {
            const { data } = await axios(`${API_ROUTE}/evolution?type=${ type }`);
            return dispatch({
                type: GET_ALL_EVOLUTIONS,
                payload: data
            })
        } catch(err) {
            console.log(err);
        }
    }
}

import axios from 'axios';

export const TYPES_OF_DOLARS = 'TYPES_OF_DOLARS';

export const onTypesOfDolars = () => {
    return function(dispatch: any) {
        axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => {
                return dispatch({type: TYPES_OF_DOLARS, payload: res.data})
            })
            .catch(err => console.log(err))
    }
}
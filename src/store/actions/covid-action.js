import axios from 'axios'

const baseUrl = 'https://api.covid19api.com/summary';
const accessToken = '5cf9dfd5-3449-485e-b5ae-70a60e997864'

export const fetchCovid = () => {
    return  (dispatch) => {
         axios
            .get(baseUrl,{
                headers:{
                    'X-Access-Token':accessToken
                }
            })
            .then(({data}) => {
                console.log(data, 'action');
                dispatch({ type: "FETCH_COVID", payload: data})
            })
            .catch(err => {
                console.log(err);
            })
    }
}
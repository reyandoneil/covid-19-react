import axios from 'axios'

const baseUrl = 'https://api.covid19api.com/';
const accessToken = '5cf9dfd5-3449-485e-b5ae-70a60e997864'
// const confirmDate = '2020-03-01T00:00:00Z'
// const curentDate = new Date()

export const fetchCovid = () => {
    return async (dispatch) => {
        await axios
            .get(`${baseUrl}summary`, {
                headers: {
                    'X-Access-Token': accessToken
                }
            })
            .then(({ data }) => {
                // console.log(data, 'action');
                dispatch({ type: "FETCH_COVID", payload: data })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const fetchCounties = () => {
    return (dispatch) => {
        axios
        .get(`${baseUrl}countries`, {
            headers: {
                'X-Access-Token': accessToken
            }
        })
        .then(({ data }) => {
            // console.log(data, 'action');
            dispatch({ type: "FETCH_COUNTRIES", payload: data })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const fetchDailyCovid = (country) => {
    return (dispatch) => {
        axios
            .get(`https://api.covid19api.com/premium/country/${country}`, {
                headers: {
                    'X-Access-Token': accessToken
                }
            })
            .then(({ data }) => {
                // console.log(data, 'action');
                dispatch({ type: "FETCH_COVID_DAILY", payload: data })
            })
            .catch(err => {
                console.log(err);
            })

    }
}
const initialState = {
    dataCovid: [],
    dataDailyCovid: [],
    dataCoutry: [],
    loadingCovid: true,
    loadingDailyCovid: true,
    loadingCountry: true

};

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_COVID":
            // console.log(payload, 'reducer');
            return { ...state, dataCovid: payload, loadingCovid: false }
        case "FETCH_COVID_DAILY":
            return { ...state, dataDailyCovid: payload, loadingDailyCovid: false }
        case "FETCH_COUNTRIES":
            // console.log(payload, 'ini di reducer');
            return { ...state, dataCountry: payload, loadingCountry: false }
        default:
            return state;
    }
}

export default Reducer
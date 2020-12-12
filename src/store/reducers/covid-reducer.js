const initialState = {
    dataCovid: [],
    dataDailyCovid: [],
    dataCoutry: [],
    loadingCovid: true,
    loadingDailyCovid: true

};

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_COVID":
            return { ...state, dataCovid: payload, loadingCovid: false }
            case "FETCH_COVID_DAILY":
                return { ...state, dataDailyCovid: payload, loadingDailyCovid: false }
                case "FETCH_COUNTRIES":
                    // console.log(payload, 'ini di reducer');
            return { ...state, dataCountry: payload, loadingDailyCovid: false }
        default:
            return state;
    }
}

export default Reducer
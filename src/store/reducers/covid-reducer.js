const initialState = {
    dataCovid: [],
    loadingCovid: true
};

function Reducer(state = initialState, {type, payload}){
    switch (type) {
        case "FETCH_COVID":
            // console.log(payload, 'ini di reducer');
            return{ ...state, dataCovid:payload, loadingCovid: false}
    
        default:
            return state;
    }
}

export default Reducer
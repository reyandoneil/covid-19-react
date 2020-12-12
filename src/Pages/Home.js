import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCovid, fetchDailyCovid, fetchCountry } from '../store/actions/covid-action'
import { useEffect, useState } from 'react';
import InfectedCard from '../Components/InfectedCard'
import Logo from '../Assets/Logo.svg'
import { Spinner } from 'react-bootstrap'
import Chart from '../Components/Chart'
import Search from '../Components/SearchCountry'



function Home() {

    const covidReducer = useSelector(state => state.covidReducer)
    const dispatch = useDispatch()
    const { loadingCovid, dataCovid, dataDailyCovid, loadingDailyCovid, dataCountry, loadingCountry } = covidReducer

    const [data, setData] = useState([])
    const [dataDaily, setDataDaily] = useState([])
    const [dataCountries, setDataCountries] = useState([])

    useEffect(() => {
        dispatch(fetchCovid())
        setData(dataCovid)
    }, [])

    useEffect(() => {
        dispatch(fetchCountry())
        setDataCountries(dataCountry)
    }, [])

    useEffect(() => {
        dispatch(fetchDailyCovid())
        setDataDaily(dataDailyCovid)
    }, [])

    console.log(dataCountry, '<---home');
    return (
        <div className='home'>
            <img src={Logo} width={'300px'} />
            <div className='date' >{new Date(dataCovid.Date).toLocaleDateString('us', { dateStyle: 'long' })}</div>
            {(loadingCovid ? <div className='spiner'><Spinner animation="border" /></div>
                :
                <InfectedCard data={dataCovid} />
            )}
            {(loadingCountry ? <div className='spiner'><Spinner animation="border" /></div>
                :
                <Search data={dataCountry} />
            )}
            {(loadingDailyCovid ? <div className='spiner'>Select Country</div>
                :
                <Chart covid={dataDailyCovid} />
            )}

        </div>
    );
}

export default Home;

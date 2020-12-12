import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCovid, fetchDailyCovid, fetchCounties } from '../store/actions/covid-action'
import { useEffect, useState } from 'react';
import InfectedCard from '../Components/InfectedCard'
import Logo from '../Assets/Logo.svg'
import { Spinner } from 'react-bootstrap'
import Chart from '../Components/Chart'
import Search from '../Components/SearchCountry'



function Home() {

    const covidReducer = useSelector(state => state.covidReducer)
    const dispatch = useDispatch()
    const { loadingCovid, dataCovid, dataDailyCovid, loadingDailyCovid } = covidReducer

    const [data, setData] = useState([])
    const [dataDaily, setDataDaily] = useState([])
    const [dataCountry, setDataCountry] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        dispatch(fetchCovid())
        setData(dataCovid)
        setLoading(loadingCovid)
    }, [loadingCovid])
    

    useEffect(() => {
        const country = 'indonesia'
        dispatch(fetchDailyCovid(country))
        setDataDaily(dataDailyCovid)
    }, [loadingDailyCovid])

    // if (loading) return <div>Loading..</div>
    console.log(dataDaily, '<---loading');

    return (
        <div className='home'>
            <img src={Logo} width={'300px'} />
            <div className='date' >{new Date(data.Date).toLocaleDateString('us', { dateStyle: 'long' })}</div>
            {(loading ? <div className='spiner'><Spinner animation="border" /></div>
                : <InfectedCard data={data} />
            )}
            <Search />
            <Chart data={dataDaily} />

        </div>
    );
}

export default Home;

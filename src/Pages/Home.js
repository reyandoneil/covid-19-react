import '../App.css';
import {useDispatch, useSelector} from 'react-redux'
import{fetchCovid} from '../store/actions/covid-action'
import { useEffect, useState } from 'react';
import InfectedCard from '../Components/InfectedCard'
import Logo from '../Assets/Logo.svg'


function Home() {

    const covidReducer = useSelector(state => state.covidReducer)
    const dispatch = useDispatch()

    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(fetchCovid())
        setData(covidReducer)
    }, [covidReducer.loadingCovid])
    // console.log(data);

    if(data.loadingCovid) return <div>Loading</div>

    return (
    <div className='home'>
        {/* <image src={Logo}/> */}
        <InfectedCard data={data}/>
    </div>
    );
    }

export default Home;

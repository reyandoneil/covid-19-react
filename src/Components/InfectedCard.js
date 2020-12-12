import '../App.css';
import CountUp from 'react-countup'

function InfoCard({ data }) {
    // console.log(data.Global, 'ini di card');

    return (
        <div className='Card'>
            <div className='NewConfirmed'>
                <div className='NewConfirmed-info'>
                    <div className='CardTitle'>Global Invected</div>
                    <h2>
                        <CountUp
                            start={0}
                            end={data.Global.TotalConfirmed}
                            duration={3}
                            separator=','
                        />
                    </h2>
                    <div className='CardTitle'>
                        Number of active cases of COVID-19
                    </div>
                    <div className='card-newNumber'>
                        + {data.Global.NewConfirmed.toLocaleString()}
                    </div>
                </div>
                <div className='NewConfirmed-btm'></div>
            </div>
            <div className='NewConfirmed'>
                <div className='NewConfirmed-info'>
                    <div className='CardTitle'>Global Recovered</div>
                    <h2>
                        <CountUp
                            start={0}
                            end={data.Global.TotalRecovered}
                            duration={2.5}
                            separator=','
                        />
                    </h2>
                    <div className='CardTitle'>
                        Number of recoveries from COVID-19
                    </div>
                    <div className='card-newNumber'>
                        + {data.Global.NewRecovered.toLocaleString()}
                    </div>
                </div>
                <div className='NewConfirmed-btm2'></div>
            </div>
            <div className='NewConfirmed'>
                <div className='NewConfirmed-info'>
                    <div className='CardTitle'>Global Deaths</div>
                    <h2>
                        <CountUp
                            start={0}
                            end={data.Global.TotalDeaths}
                            duration={2}
                            separator=','
                        />
                    </h2>
                    <div className='CardTitle'>
                        Number of deaths coused COVID-19
                    </div>
                    <div className='card-newNumber'>
                        + {data.Global.NewDeaths.toLocaleString()}
                    </div>
                </div>
                <div className='NewConfirmed-btm3'></div>
            </div>


        </div>
    )
}

export default InfoCard

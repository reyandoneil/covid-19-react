import { Line, Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux'

function Chart(covid) {
    const dataCovid = covid.daily
    const globalData = covid.global
    const covidReducer = useSelector(state => state.covidReducer)
    const { loadingCovid } = covidReducer
    const currentDate = new Date(globalData.Date).toLocaleDateString('us', { dateStyle: 'long' })
    const lineChart = (
        <Line
            data={{
                labels: dataCovid.map((data) => new Date(data.Date).toLocaleDateString()),
                datasets: [{
                    data: dataCovid.map((data) => data.NewCases),
                    label: 'Infected',
                    borderColor: '#81A3FF',
                    fill: true,
                }, {
                    data: dataCovid.map((data) => data.NewDeaths),
                    label: 'Deaths',
                    borderColor: '#FF8181',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },
                ],
            }}
        />
    )
  

    console.log(globalData, '<---chart');
    if (dataCovid.length === 0 && loadingCovid === false ) {
        const barChart = (
            <Bar
                data={{

                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['#FFC881', '#81A3FF', '#FF8181'],
                            data: [globalData.Global.NewConfirmed, globalData.Global.NewRecovered, globalData.Global.NewDeaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Global Covid-19 New Cases / ${currentDate}` },
                }}
            />
        )
        return <div className='Chart'>
            <h1></h1>
            {barChart}
        </div>
    }
    return (
        <div className='Chart'>
            <h1>{ }</h1>
            {lineChart}
        </div>
    )
}

export default Chart

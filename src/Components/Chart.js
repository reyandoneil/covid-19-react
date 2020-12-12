import { Line, Bar } from 'react-chartjs-2';

function Chart(covid) {
    const data = covid.data
    // console.log(data, 'Charts');
    const lineChart = (
        <Line
            data={{
                labels: data.map((data) => new Date (data.Date).toLocaleDateString()),
                datasets: [{
                    data: data.map((data) => data.NewCases),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: data.map((data) => data.NewDeaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },
                ],
            }}
        />
    )
    return (
        <div className='Chart'>
            <h1>Chart</h1>
            {lineChart}
        </div>
    )
}

export default Chart

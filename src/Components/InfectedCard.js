import React from 'react'
import '../App.css';

function InfoCard({data}) {
    console.log(data,'ini di card');
    return (
        <div>
            <div></div>
            <p>{JSON.stringify(data.dataCovid, null, 2)}</p>
        </div>
    )
}

export default InfoCard

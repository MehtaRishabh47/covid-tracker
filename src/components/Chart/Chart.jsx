import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../Api/Api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
import { rgbToHex } from '@material-ui/core';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgb(255,0,0,0.5)',
                            fill: true,
                        }]
                    }}
                />) : null
    );
    console.log(confirmed, recovered, deaths);
    const barchart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recoverd', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'maroon',
                                'green',
                                'black',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}
                />
            ) : null
    )
    return (
        <div className={styles.container}>
            {country ? barchart : lineChart}
        </div>
    )
}

export default Chart;
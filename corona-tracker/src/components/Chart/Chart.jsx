import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'; 
 
import styles from './Chart.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData)

        fetchApi(); 
    }, [dailyData]);

    const lineChart = (
        dailyData.length 
        ? (
        <Line 
        data={{
           labels: dailyData.map(({ date }) => date), 
           datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed), 
                label: 'Infected', 
                borderColor: '#93C5FD', 
                fill: true
           }, {
                data: dailyData.map(({ deaths }) => deaths), 
                label: 'Infected', 
                borderColor: '#F87171', 
                backgroundColor: '#FDA4AF',
                fill: true
           }], 
        }}
        />) : null
    ); 

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart; 
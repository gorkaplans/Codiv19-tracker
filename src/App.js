import React from 'react'; 

import { Cards, Chart, CountryPicker, Title } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {
    state = {
        data: {}, 
        country: '', 
    }

    async componentDidMount() {
        const data = await fetchData();
        
        this.setState({ data: data })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country }); 


        
    }

    render() {
        const { data, country } = this.state;

        return ( 
            <div className={styles.container}>
                <Title></Title>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App; 
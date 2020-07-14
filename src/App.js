import React from 'react';
import './App.css';
// import { Cards, Charts, CountryPicker } from './components';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import fetchData from './Api/Api';
import coronalogo from './Images/logo4.png';
// import styles from './App.css';
// import { StylesProvider } from '@material-ui/core';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    // console.log(data);
    this.setState({ data: fetchedData });

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (

      <div className='App'>
        <img src={coronalogo} alt="Corona Virus" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;

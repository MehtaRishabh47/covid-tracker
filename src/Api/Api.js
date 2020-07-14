import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async (country) => {
    let changeUrl = url;
    if (country) {
        changeUrl = `${url}/countries/${country}`
    }

    try {
        const { data } = await axios.get(changeUrl);

        const currentData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return currentData;
    }
    catch (error) {
        console.log(error);
    }
}
// -----------------DAILY DATA CHART------------------

export const fetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    }
    catch (error) {

    }
}
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}
export default fetchData;
import React, { useState, useEffect } from 'react';
import { NativeSelect, formControl, StylesProvider } from '@material-ui/core';
import styles from './Country.module.css';
import { fetchCountries } from '../../Api/Api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchCountries]);


    console.log(fetchedCountries);

    return (
        <div className={styles.form}>
            <h3>Choose Your Country:</h3>
            <formControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </formControl>
        </div>
    )
}

export default CountryPicker;
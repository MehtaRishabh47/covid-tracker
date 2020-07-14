import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';



const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    // console.log(data);
    if (!confirmed) {
        return ("Loading......")
    }
    return (
        <div className={StylesProvider.container}>
            <Grid container spaceing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            separator=","
                            duration={2.0}
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>


                {/* -----------------Recovered-------------------------- */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoverd)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <CountUp
                            start={0}
                            end={recovered.value}
                            separator=","
                            duration={2.0}
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* ------------Deaths----------------------- */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <CountUp
                            start={0}
                            end={deaths.value}
                            separator=","
                            duration={2.0}
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
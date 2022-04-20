import React from 'react';
import {Grid, Fade} from '@mui/material';
import lock_pic from './lock.jpg';
import { Link } from 'react-router-dom'

const styles = {
    image : {
        height: "30%",
        width: "30%",
        cursor: "pointer",
    },

    text : {
        borderTop: "1px solid black",
    },

    grid : {
        minHeight: '100vh',
    }
}
const PreLandingPage = () => {
    return(
            <Grid
               container
               direction="column"
               justifyContent="center"
               alignItems="center" 
               style={styles.grid}
            >
                <Grid item>
                    <Fade
                        appear
                        in
                        timeout={2000}
                    >
                        <Link to='/home'><img style={styles.image} alt='text' src={lock_pic}/></Link>
                    </Fade>
                </Grid>

                
                <Grid item >
                    <Fade
                        appear
                        in
                        timeout={2000}
                    >
                        <p style={styles.text}>ultra</p>
                    </Fade>
                </Grid>
                
            </Grid>
    );
}

export default PreLandingPage;
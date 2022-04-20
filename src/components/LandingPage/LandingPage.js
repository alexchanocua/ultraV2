import Grid from '@mui/material/Grid'
import ocean_pic from './ocean.jpeg'
import React from 'react';
import { Container, Fade } from '@mui/material';
import LoginRegisterButton from '../LoginRegisterButton/LoginRegisterButton';

const styles = {
    image : {
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto",
        display: "block",
        borderRadius: '5px'
    },
    grid: {
        // marginTop: "2rem",
        minHeight: '100vh'
    }
};

const LandingPage = () => {

    return (
        <Container>
            <Grid 
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={styles.grid}
            >
                <Grid item >
                    <Fade
                        appear
                        in
                        timeout={1000}
                    >
                        <img style={styles.image} alt='logo' src={ocean_pic}/>
                    </Fade>
                </Grid>
                <Grid item >
                    <p>ultra</p>
                </Grid>
                <Grid item>
                <Grid item>
                    <LoginRegisterButton/>
                </Grid>
            </Grid>
        </Grid>
        </Container>
        
    );
}

export default LandingPage;
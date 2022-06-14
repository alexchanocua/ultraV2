import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {UserAuth} from '../../Context/AuthContext';
import NavBar from "../NavBar/NavBar";
import { Button, Container, Grid } from "@mui/material";
import './Home.css';
import Footer from '../Footer/Footer';
import Images from '../Images/Images';

import image1 from '../../assests/homeImage.jpg';
import image2 from '../../assests/homeImage4.jpg';
import image3 from '../../assests/homeImage5.jpg';

const images = [image1, image2, image3];

const Home = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/home');
            console.log('You are logged out.');
        } catch (e) {
            console.log(e.message);
        }
    }

    if(user){
        return(
            <>
                <NavBar id="navBar"/>
                <Grid
                    container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    className="home__container"
                >
                    <p>User email: {user && user.email} </p>
                    <Button onClick={handleLogout}>Logout</Button>
                    {/* mapping all the images and displaying them */}
                    {images.map((image) =>
                        <Grid item className="imageContainer"> 
                            <img class="homeImages" alt='logo' src={image}/>
                        </Grid>)}
                    <Grid item>
                        {/* <Images/> */}
                    </Grid>
                </Grid>
                <Footer/>
            </>
        );
    } else {
        return <Navigate to="/login"/>
    }
    
}

export default Home;
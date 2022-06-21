import React, {useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {UserAuth} from '../../Context/AuthContext';
import NavBar from "../NavBar/NavBar";
import { Button, Container, Grid } from "@mui/material";
import { storage } from '../../firebase';
import { ref,listAll, getDownloadURL } from 'firebase/storage';
import './Home.css';
import Footer from '../Footer/Footer';
import Images from '../Images/Images';


const Home = () => {
    const {user, logout} = UserAuth();
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [url, ...prev]);
                })
            })
        })
    },[])

    if(user){
        return(
            <>
                <NavBar id="navBar" />
                <Grid
                    container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    className="home__container"
                >
                    {/* mapping all the images and displaying them */}
                    {imageList.map((url) =>
                        <Grid item className="imageContainer"> 
                            <img className="homeImages" loading='lazy' alt='logo' src={url}/>
                        </Grid>)}
                    <Grid item>
                        {/* <Images imageList={{imageList}}/> */}
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
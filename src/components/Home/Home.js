import NavBar from "../NavBar/NavBar";
import { Container, Grid } from "@mui/material";
import './Home.css';
import Footer from '../Footer/Footer';
import Images from '../Images/Images';


const Home = () => {
    return(
        <>
            <NavBar id="navBar"/>
            <Grid
                container
                spacing={1}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                
                {/* mapping all the images and displaying them
                {images.map((image) =>
                    <Grid item> 
                        <img class="homeImages" alt='logo' src={image}/>
                    </Grid>)} */}
                <Grid item>
                    <Images/>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default Home;
import NavBar from "../NavBar/NavBar";
import { Grid } from "@mui/material";
import homeImage5 from './homeImage5.jpg';
import homeImage4 from './homeImage4.jpg';
import homeImage from './homeImage.jpg';
import './Home.css';
import Footer from '../Footer/Footer';

const images = [homeImage5, homeImage4, homeImage];

const Home = () => {
    return(
        <>
        <NavBar/>
        <Grid
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            {/* mapping all the images and displaying them */}
            {images.map((image) =>
                <Grid item> 
                    <img class="homeImages" alt='logo' src={image}/>
                </Grid>)};
            <Grid item>
                <Footer/>
            </Grid>
        </Grid>
        </>
    );
}

export default Home;
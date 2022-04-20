import React, {useState, useEffect} from 'react'
import { Grid, TextField, Button, Fade } from "@mui/material";
import image from './basquiat.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from '../LoadingBar/LoadingBar.js';
import './Login.css';
import { FlareSharp } from '@mui/icons-material';

const styles = {
    image : {
        height: "70%",
        width: "70%",
        borderRadius: '5px',
    },

    grid : {
        minHeight: '100vh',
    },

    inputLabels : {
        width : "30ch",
        fontFamily: "Courier New !important",
        margin: "5px"
    }
}

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [invalidLogin, setInvalidLogin] = useState(false);

    const handleSubmit = async () => {
        if(email && password) {
            try{
                const response = await axios.post('https://still-fjord-41724.herokuapp.com/signin',
                    {
                        email: email,
                        password: password,
                    }
                );
                while(!response){
                    setLoading(true);
                }
                
                navigate("/userHome");  
            } catch(error) {
                setLoading(false);
                setEmail('');
                setPassword('');
                setInvalidLogin(true);
            };
        }
        
    }

    useEffect(() => {
        handleSubmit();
    },[loading]);

    return (
        <>
        <Grid
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center" 
            style={styles.grid}
        >
            
            <Grid item>
                <Fade
                    appear
                    in
                    timeout={1000}
                >
                <img style={styles.image} alt='text' src={image}/>
                </Fade>
            </Grid>
            <Grid item>
                <p>ultra</p>
            </Grid>
    
            {/* display loading bar if waiting for response */}
            {loading
                ? <LoadingBar/>
                : <>
                    {invalidLogin ? <p>Please enter correct login info.</p> : ""}
                    <Grid item>
                        <TextField 
                            onChange={(e) => setEmail(e.target.value)}
                            sx={styles.inputLabels}
                            color="info"
                            size="small"
                            required 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            onChange={(e) => setPassword(e.target.value)}
                            sx={styles.inputLabels}
                            required 
                            id="outlined-basic"
                            size="small" 
                            label="Password" 
                            variant="outlined" 
                            type="password" 
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            style={{fontFamily: "Courier New", backgroundColor: "rgba(0, 0, 0, 0.04)"} } 
                            type="submit"
                            color='inherit'
                            fullWidth
                            disabled={!password && !email}
                            onClick={() => {setLoading(true)}}
                        >
                            login
                        </Button>
                    </Grid>
                </>
            }
        </Grid>
        </>
        
    );
}

export default Login;
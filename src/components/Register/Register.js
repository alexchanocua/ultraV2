import React, {useState} from 'react'
import { Grid, TextField, Button, Fade } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import image from './registerImage.jpg';
import axios from 'axios';

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
const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(email && password && name) {
            // registering user
            const results = await axios.post('https://still-fjord-41724.herokuapp.com/register',
                    {
                        email: email,
                        password: password,
                        name: name
                    }
                );
            // navigate("/userHome");       
        }
    }

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
            <Grid item>
                <TextField 
                    onChange={(e) => setName(e.target.value)}
                    sx={styles.inputLabels}
                    color="info"
                    size="small"
                    required 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                />
            </Grid>
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
                    required id="outlined-basic"
                    size="small" 
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                />
            </Grid>
            <Grid item>
                <Button 
                    style={{fontFamily: "Courier New", backgroundColor: "rgba(0, 0, 0, 0.04)"} } 
                    color='inherit'
                    fullWidth
                    onClick={handleSubmit}
                >
                    register
                </Button>
            </Grid>
        </Grid>
        </>
        
    );
}

export default Register;
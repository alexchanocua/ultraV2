import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function LoginRegisterButton() {
  return (
    <ButtonGroup 
        
        color='inherit'
        orientation='vertical' 
        variant="text"
        size='small'
    >
      <Button style={{fontFamily: "Courier New"} } component={Link} to='/Login'>Login</Button>
      <Button style={{fontFamily: "Courier New"} } component={Link} to='/Register'>Register</Button>
    </ButtonGroup>
  );
}

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingBar from '../LoadingBar/LoadingBar.js';
import { UserAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ImageModal.css';
import { IconButton,  Stack } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { styled } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '1px solid black',
  borderRadius: '0.5rem',
  boxShadow: 20,
  p: 4,
};

const Input = styled('input')({
    display: 'none',
  });

const ImageModal = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);
    const {user, uploadImage} = UserAuth();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpload = async () => {
        if(imageUpload == null) return;
        try {
            await uploadImage(imageUpload);
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
        <Button onClick={handleOpen}>Upload</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => {setImageUpload(e.target.files[0])}} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
                    <label htmlFor="contained-button-file">
                        <Button onClick={handleUpload} variant="outlined" component="span">
                        Upload
                        </Button>
                    </label>
                </Stack>
            </Box>
        </Modal>
        </div>
    );
}

export default ImageModal;
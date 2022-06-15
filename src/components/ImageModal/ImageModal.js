import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingBar from '../LoadingBar/LoadingBar.js';
import { UserAuth } from '../../Context/AuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid black',
  borderRadius: '0.5rem',
  boxShadow: 20,
  p: 4,
};

const ImageModal = () => {
    const [open, setOpen] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);
    const [loading, setLoading] = useState(false);
    const {user, uploadImage} = UserAuth();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpload = async () => {
        if(imageUpload == null) return;
        setLoading(true);
        try {
            await uploadImage(imageUpload);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        setOpen(false);
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
            <Typography  id="modal-modal-title" variant="h6" component="h2">
                Upload your art
            </Typography>
            {loading
                ? <LoadingBar/>
                : <>
                    <input type='file' onChange={(e) => {setImageUpload(e.target.files[0])}}/>
                    <Button onClick={handleUpload}>Upload</Button>
                </>
            }
            </Box>
        </Modal>
        </div>
    );
}

export default ImageModal;
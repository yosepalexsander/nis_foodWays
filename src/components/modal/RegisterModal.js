import { useState, forwardRef } from 'react';
import {useHistory} from 'react-router-dom';
import {
  Modal,
} from '@material-ui/core';
import Register from '../form/Register';

const styles = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0
  },
}

const RegisterModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const handleClose = () => {
    setOpen(false)
    history.push('/')
  }
  return (
    <div>
      
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={styles.modal}
        open={open}
        keepMounted
        onClose={handleClose}
      >
          <Register />
      </Modal>
    </div>
  )
})

export default RegisterModal;
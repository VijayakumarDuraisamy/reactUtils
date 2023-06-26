import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Mysnackbar = ({ snackbaropen, snackbarmsg, severity }) => {


  return (
    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={snackbaropen} >
        <Alert severity={severity} sx={{ width: '100%', fontWeight: 'bold' }}>
          {snackbarmsg}
        </Alert>
      </Snackbar>

    </Stack>
  );
};
export default Mysnackbar
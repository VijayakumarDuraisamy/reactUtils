import React from 'react';
import Button from '@mui/material/Button';
import './mui.css';
const GlobalButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default GlobalButton;

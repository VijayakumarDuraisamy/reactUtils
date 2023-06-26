import React from 'react';
import * as MuiIcons from '@mui/icons-material';

const GlobalIcon = ({ name, ...props }) => {
  const IconComponent = MuiIcons[name];

  if (!IconComponent) {
    console.error(`Invalid icon name: ${name}`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default GlobalIcon;

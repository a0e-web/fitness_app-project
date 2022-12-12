import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import Logo from '../assets/images/Logo-4.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '90px', height: '45px' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      a0e-web ile Basmaya Devam 💪🏽
      </Typography>
    </Box>
  )
}

export default Footer
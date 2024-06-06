// Footer.jsx

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter, Email, Android, Apple } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(51, 51, 51, 0)', // Transparent background color
        color: '#fff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <IconButton>
          <Instagram />
        </IconButton>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Instagram</Typography>
      </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <IconButton>
          <Facebook />
        </IconButton>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Facebook</Typography>
      </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <IconButton>
          <Twitter />
        </IconButton>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Twitter</Typography>
      </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <IconButton>
          <Email />
        </IconButton>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Email</Typography>
      </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <IconButton>
          <Android />
        </IconButton>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Android</Typography>
      </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <IconButton>
          <Apple />
        </IconButton>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Apple</Typography>
      </Box><Box>
        <Typography variant="body2" sx={{ color: '#1B1A55' }}>Copyright © 2024 Your Company</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

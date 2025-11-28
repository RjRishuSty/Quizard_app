import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Link,
} from '@mui/material';
import {
  Language as LanguageIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { X } from '@mui/icons-material'; 
import { flexBetween } from '../styles/flexStyles';

const footerStyle = {
  backgroundColor: 'primary.main', 
  width: '100%',
  padding: '30px 40px',
  ...flexBetween,
  flexWrap: 'wrap', 
  color: 'inherit',
};



const Footer = () => {
  const navLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy & Cookies Policy', href: '#' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ];

  return (
    <Box component="footer" sx={footerStyle}>
      <Stack direction="column" spacing={2} alignItems="flex-start" sx={{ minWidth: 200, py: 1 }}>
        <Button
          variant="contained"
          startIcon={<LanguageIcon />}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            textTransform: 'none',
            borderRadius: 2,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#e0e0e0', 
            },
          }}
        >
          English
        </Button>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Quizzard © 2025. All rights reserved.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2} alignItems="flex-end" sx={{ flexGrow: 1, textAlign: 'right', py: 1 }}>
       
        <Stack direction="row" spacing={3} justifyContent="flex-end" sx={{ flexWrap: 'wrap' }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="hover"
              variant="body2"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
          <Link href="#" target="_blank" color="inherit">
            <FacebookIcon fontSize="medium" sx={{ color: 'white' }} />
          </Link>
          <Link href="#" target="_blank" color="inherit">
            <InstagramIcon fontSize="medium" sx={{ color: 'white' }} />
          </Link>
          <Link href="#" target="_blank" color="inherit">
            <LinkedInIcon fontSize="medium" sx={{ color: 'white' }} />
          </Link>
          <Link href="#" target="_blank" color="inherit">
            <X fontSize="medium" sx={{ color: 'white' }} /> {/* The 'X' icon */}
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';




function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/tgodkev">
          My GitHub <GitHubIcon />
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Footer(){
return(

<Box sx={{ bgcolor: '#EC255A', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Code By Kev
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made in Ohio.
        </Typography>
        <Copyright />
      </Box>
)
}


export default Footer;
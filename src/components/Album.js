import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#292C6D',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#FAEDF0"
              gutterBottom
            >
              Im Kevin, A Web Developer.
            </Typography>
            <Typography variant="h5" align="center" color="#FAEDF0" paragraph>
              Im a  28 year old web Developer from ohio, I utilize the MERN stack to make my web applications.
              Im currently seeking a entry level front end web developer role, check out some of my web apps below and feel free to get in touch.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
              <Link color="inherit" href="https://github.com/tgodkev">
                    My GitHub
                    </Link> <GitHubIcon />
                    </Button>
              <Button variant="outlined">
              <Link color="inherit" href="https://www.linkedin.com/in/kevin-knight-b39ba8188/?fbclid=IwAR0IhzMfEmT_M7nKDtKQajtA9T-4GZ27HGEjjEeN-Q3GFEMjKk4fVeEl7ZE">
                    My Linkdin.
                    </Link> <LinkedInIcon />
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
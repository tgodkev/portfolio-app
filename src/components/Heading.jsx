import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from "react-router-dom";
import { Button } from '@mui/material';



function Heading(){
  
    return(
<AppBar className='heading'>
        <Toolbar>
          <CatchingPokemonIcon sx={{ mr: 2 }} />
          <Typography variant="h4" color="#FAEDF0" >
            Kevs Portfolio Page.
          </Typography>

        </Toolbar>
      </AppBar>
    )
}


export default Heading;
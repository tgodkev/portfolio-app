import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';




function Heading(){
  
  const[red, setRed] = useState(false);

  function setPokeball() {
    setRed(!red);
  }


    return(
<AppBar className='heading'>
        <Toolbar>
          <CatchingPokemonIcon sx={{ mr: 2 }} onClick={setPokeball} style={{color: red ? "red" : "white"}} />
          <Typography variant="h4" color="#FAEDF0" >
            Kevs Portfolio Page.
          </Typography>

        </Toolbar>
      </AppBar>
    )
}


export default Heading;